# GoldLeaves Intake API Contracts

Scope: Wire the frontend intake form to FastAPI + MongoDB. Save submissions and expose a basic admin list endpoint. No external services by default.

Environment & Routing
- Backend runs at 0.0.0.0:8001 (supervised). All routes must be prefixed with /api.
- Frontend reads backend base from process.env.REACT_APP_BACKEND_URL.
- Backend DB uses os.environ['MONGO_URL'] and os.environ['DB_NAME'] (already configured).
- Collection: intakes.

Data Model
- IntakeCreate
  - name: string (2..200)
  - email: string (email)
  - project_type: string (non-empty)
  - budget: string (non-empty)
  - description: string (10..5000)
  - agree: boolean (must be true)
  - source: optional string (e.g., "web")
  - user_agent: optional string
- IntakeOut = IntakeCreate +
  - id: string (UUIDv4)
  - created_at: ISO datetime (UTC)

Endpoints
1) POST /api/intakes
   - Request: JSON IntakeCreate
   - Response 201: IntakeOut
   - Errors: 400 (validation), 500 (server)
   - Side effects: persist to MongoDB (collection intakes)

2) GET /api/intakes
   - Query: limit (default 50, max 200)
   - Response 200: [IntakeOut]
   - Notes: Intended for admin use only; optional header-based guard X-Admin-Token (future).

Frontend Integration
- Replace mock submit in ExpandableFormSection with axios POST `${REACT_APP_BACKEND_URL}/api/intakes`.
- On success: show toast + thanks state. On failure: show error toast and keep form open.

Validation Parity
- Frontend (react-hook-form + zod) already validates the following fields:
  - name (min 2), email, projectType, budget, description (min 10), agree (true)
- Backend will mirror validation and reject if agree is false.

Security & Observability (Phase 2 optional)
- Email notifications (SendGrid) → requires API key from user.
- Slack webhook alert on each intake.
- Simple shared admin token header for GET.
- Basic rate-limit via ingress.

Testing Plan
- Backend: unit test POST & GET (deep_testing_backend_v2) → 201 creation, 400 rejects, list returns created record.
- Frontend: submit form against live backend; success and failure paths.

Notes
- No external redirects; form expands inline.
- No schema migrations required; MongoDB collection auto-creates.