import sys, os
from fastapi.testclient import TestClient
import types
import pytest

# Ensure repo root and backend module are importable in CI
sys.path.insert(0, os.path.abspath("."))
sys.path.insert(0, os.path.abspath("backend"))

from backend import server as srv  # noqa: E402


class _FakeCursor:
    def __init__(self, items):
        self.items = items

    def sort(self, field, order):
        self.items = sorted(self.items, key=lambda x: x.get(field), reverse=bool(order == -1))
        return self

    async def to_list(self, limit):
        return self.items[:limit]


class _FakeCollection:
    def __init__(self):
        self.items = []

    async def insert_one(self, item):
        self.items.append(item)
        return types.SimpleNamespace(inserted_id=item.get("id"))

    def find(self):
        return _FakeCursor(list(self.items))


@pytest.fixture(autouse=True)
def fake_db(monkeypatch):
    fake = types.SimpleNamespace(
        intakes=_FakeCollection(),
        status_checks=_FakeCollection(),
    )
    monkeypatch.setattr(srv, "db", fake)
    yield


client = TestClient(srv.app)


def test_health():
    r = client.get("/api/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


def test_create_and_list_intake():
    payload = {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "project_type": "Full‑stack web app",
        "budget": "$1k–3k",
        "description": "Build a dashboard.",
        "agree": True,
        "source": "test",
    }
    r = client.post("/api/intakes", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert all(k in data for k in ["id", "created_at", "email", "project_type"])

    r2 = client.get("/api/intakes")
    assert r2.status_code == 200
    items = r2.json()
    assert any(it["id"] == data["id"] for it in items)


def test_reject_agree_false():
    payload = {
        "name": "John",
        "email": "john@example.com",
        "project_type": "API app",
        "budget": "$3k–6k",
        "description": "Something",
        "agree": False,
    }
    r = client.post("/api/intakes", json=payload)
    assert r.status_code == 400