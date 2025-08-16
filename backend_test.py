#!/usr/bin/env python3
"""
Backend API Testing Suite for Intake Endpoints
Tests the FastAPI backend endpoints for intake form functionality.
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any

# Backend URL from frontend environment
BACKEND_URL = "https://goldleaves-agency.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'User-Agent': 'Backend-Test-Suite/1.0'
        })
        self.test_results = []
        
    def log_test(self, test_name: str, success: bool, details: str = ""):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"   Details: {details}")
        self.test_results.append({
            'test': test_name,
            'success': success,
            'details': details
        })
        
    def test_health_endpoint(self):
        """Test GET /api/ health check endpoint"""
        try:
            response = self.session.get(f"{API_BASE}/")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Health Check (GET /api/)", True, f"Response: {data}")
                    return True
                else:
                    self.log_test("Health Check (GET /api/)", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Health Check (GET /api/)", False, f"Status: {response.status_code}, Body: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Health Check (GET /api/)", False, f"Exception: {str(e)}")
            return False
    
    def test_create_intake_valid(self):
        """Test POST /api/intakes with valid payload"""
        payload = {
            "name": "Jane Doe",
            "email": "jane@example.com",
            "project_type": "Full-stack web app",
            "budget": "$1k-3k",
            "description": "Build a dashboard for managing customer data with real-time analytics.",
            "agree": True,
            "source": "test"
        }
        
        try:
            response = self.session.post(f"{API_BASE}/intakes", json=payload)
            
            if response.status_code == 201:
                data = response.json()
                
                # Check required fields are present
                required_fields = ['id', 'created_at', 'name', 'email', 'project_type', 'budget', 'description', 'agree']
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_test("Create Intake (Valid Payload)", False, f"Missing fields: {missing_fields}")
                    return False, None
                
                # Validate field values
                if (data['name'] == payload['name'] and 
                    data['email'] == payload['email'] and
                    data['project_type'] == payload['project_type'] and
                    data['budget'] == payload['budget'] and
                    data['description'] == payload['description'] and
                    data['agree'] == payload['agree']):
                    
                    self.log_test("Create Intake (Valid Payload)", True, f"Created intake with ID: {data['id']}")
                    return True, data
                else:
                    self.log_test("Create Intake (Valid Payload)", False, "Response data doesn't match input payload")
                    return False, None
            else:
                self.log_test("Create Intake (Valid Payload)", False, f"Status: {response.status_code}, Body: {response.text}")
                return False, None
                
        except Exception as e:
            self.log_test("Create Intake (Valid Payload)", False, f"Exception: {str(e)}")
            return False, None
    
    def test_create_intake_invalid_agree_false(self):
        """Test POST /api/intakes with agree=false (should return 400)"""
        payload = {
            "name": "John Smith",
            "email": "john@example.com",
            "project_type": "Mobile app",
            "budget": "$5k-10k",
            "description": "Build a mobile app for food delivery with GPS tracking.",
            "agree": False,
            "source": "test"
        }
        
        try:
            response = self.session.post(f"{API_BASE}/intakes", json=payload)
            
            if response.status_code == 400:
                data = response.json()
                if "detail" in data and "acknowledgement" in data["detail"].lower():
                    self.log_test("Create Intake (agree=false)", True, f"Correctly rejected with: {data['detail']}")
                    return True
                else:
                    self.log_test("Create Intake (agree=false)", True, f"Rejected with status 400: {data}")
                    return True
            else:
                self.log_test("Create Intake (agree=false)", False, f"Expected 400, got {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Create Intake (agree=false)", False, f"Exception: {str(e)}")
            return False
    
    def test_list_intakes(self, created_intake_id=None):
        """Test GET /api/intakes and verify created record is present"""
        try:
            response = self.session.get(f"{API_BASE}/intakes")
            
            if response.status_code == 200:
                data = response.json()
                
                if not isinstance(data, list):
                    self.log_test("List Intakes", False, f"Expected list, got: {type(data)}")
                    return False
                
                if created_intake_id:
                    # Check if our created intake is in the list
                    found_intake = None
                    for intake in data:
                        if intake.get('id') == created_intake_id:
                            found_intake = intake
                            break
                    
                    if found_intake:
                        self.log_test("List Intakes (with created record)", True, f"Found created intake in list. Total records: {len(data)}")
                        return True
                    else:
                        self.log_test("List Intakes (with created record)", False, f"Created intake not found in list of {len(data)} records")
                        return False
                else:
                    self.log_test("List Intakes", True, f"Retrieved {len(data)} intake records")
                    return True
            else:
                self.log_test("List Intakes", False, f"Status: {response.status_code}, Body: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("List Intakes", False, f"Exception: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all backend tests in sequence"""
        print(f"🚀 Starting Backend API Tests")
        print(f"📍 Testing against: {API_BASE}")
        print("=" * 60)
        
        # Test 1: Health check
        health_ok = self.test_health_endpoint()
        
        # Test 2: Create intake with valid payload
        create_ok, created_intake = self.test_create_intake_valid()
        
        # Test 3: Create intake with agree=false
        validation_ok = self.test_create_intake_invalid_agree_false()
        
        # Test 4: List intakes (and verify created record if available)
        created_id = created_intake.get('id') if created_intake else None
        list_ok = self.test_list_intakes(created_id)
        
        print("=" * 60)
        
        # Summary
        passed = sum(1 for result in self.test_results if result['success'])
        total = len(self.test_results)
        
        print(f"📊 Test Summary: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed! Backend is working correctly.")
            return True
        else:
            print("⚠️  Some tests failed. Check details above.")
            return False

def main():
    """Main test execution"""
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if not success:
        sys.exit(1)

if __name__ == "__main__":
    main()