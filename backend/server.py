from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class IntakeCreate(BaseModel):
    name: str = Field(min_length=2, max_length=200)
    email: EmailStr
    project_type: str = Field(min_length=1)
    budget: str = Field(min_length=1)
    description: str = Field(min_length=10, max_length=5000)
    agree: bool
    source: Optional[str] = None
    user_agent: Optional[str] = None

class IntakeOut(IntakeCreate):
    id: str
    created_at: datetime

# Routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/intakes", response_model=IntakeOut, status_code=201)
async def create_intake(req: Request, payload: IntakeCreate):
    if not payload.agree:
        raise HTTPException(status_code=400, detail="Engagement acknowledgement is required")
    item = payload.dict()
    item.update({
        "id": str(uuid.uuid4()),
        "created_at": datetime.utcnow(),
        "user_agent": payload.user_agent or req.headers.get("user-agent"),
        "source": payload.source or "web",
    })
    await db.intakes.insert_one(item)
    return IntakeOut(**item)

@api_router.get("/intakes", response_model=List[IntakeOut])
async def list_intakes(limit: int = 50):
    limit = min(max(limit, 1), 200)
    docs = await db.intakes.find().sort("created_at", -1).to_list(limit)
    return [IntakeOut(**d) for d in docs]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()