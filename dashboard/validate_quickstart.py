#!/usr/bin/env python3
"""
Quickstart validation script to ensure the setup process works smoothly.
This script verifies that all required files and configurations are in place.
"""

import os
import sys
from pathlib import Path


def validate_project_structure():
    """Validate that all required directories and files exist."""
    required_paths = [
        'dashboard/',
        'dashboard/backend/',
        'dashboard/frontend/',
        'dashboard/docker-compose.yml',
        'dashboard/README.md',
        'dashboard/backend/requirements.txt',
        'dashboard/backend/src/',
        'dashboard/backend/src/main.py',
        'dashboard/frontend/package.json',
        'dashboard/frontend/src/',
    ]
    
    print("Validating project structure...")
    all_valid = True
    for path in required_paths:
        full_path = Path(path)
        if not full_path.exists():
            print(f"[ERROR] Missing: {path}")
            all_valid = False
        else:
            print(f"[OK] Found: {path}")

    if all_valid:
        print("\n[SUCCESS] All required directories and files are present")
    else:
        print("\n[ERROR] Some required files/directories are missing")

    return all_valid


def validate_backend_setup():
    """Validate that backend is properly configured."""
    print("\nValidating backend setup...")
    
    backend_path = Path("dashboard/backend")
    if not backend_path.exists():
        print("❌ Backend directory doesn't exist")
        return False
    
    # Check requirements.txt
    requirements_path = backend_path / "requirements.txt"
    if not requirements_path.exists():
        print("❌ Backend requirements.txt not found")
        return False
    
    requirements = requirements_path.read_text()
    required_packages = [
        "fastapi",
        "uvicorn",
        "python-jose",
        "passlib",
        "python-multipart"
    ]
    
    all_present = True
    for pkg in required_packages:
        if pkg.lower() not in requirements.lower():
            print(f"[ERROR] Missing package in requirements: {pkg}")
            all_present = False
        else:
            print(f"[OK] Found package: {pkg}")

    # Check config
    config_path = backend_path / "src" / "config.py"
    if not config_path.exists():
        print("[ERROR] Backend config file not found")
        return False

    print("[SUCCESS] Backend configuration is valid")
    return all_present


def validate_frontend_setup():
    """Validate that frontend is properly configured."""
    print("\nValidating frontend setup...")
    
    frontend_path = Path("dashboard/frontend")
    if not frontend_path.exists():
        print("❌ Frontend directory doesn't exist")
        return False
    
    # Check package.json
    package_json_path = frontend_path / "package.json"
    if not package_json_path.exists():
        print("❌ Frontend package.json not found")
        return False
    
    package_json = package_json_path.read_text()
    required_deps = [
        "next",
        "react",
        "react-dom",
        "axios"
    ]
    
    all_present = True
    for dep in required_deps:
        if f'"{dep}' not in package_json:
            print(f"[ERROR] Missing dependency in package.json: {dep}")
            all_present = False
        else:
            print(f"[OK] Found dependency: {dep}")

    print("[SUCCESS] Frontend configuration is valid")
    return all_present


def main():
    """Run all validation checks."""
    print("Running quickstart validation...\n")
    
    structure_valid = validate_project_structure()
    backend_valid = validate_backend_setup()
    frontend_valid = validate_frontend_setup()
    
    print(f"\n{'='*50}")
    print("VALIDATION SUMMARY:")
    print(f"Project Structure: {'[OK] PASS' if structure_valid else '[ERROR] FAIL'}")
    print(f"Backend Setup: {'[OK] PASS' if backend_valid else '[ERROR] FAIL'}")
    print(f"Frontend Setup: {'[OK] PASS' if frontend_valid else '[ERROR] FAIL'}")

    overall_success = structure_valid and backend_valid and frontend_valid
    print(f"Overall Status: {'[OK] ALL PASS' if overall_success else '[ERROR] SOME FAILED'}")
    print("="*50)

    if overall_success:
        print("\n[SUCCESS] Quickstart validation successful!")
        print("The setup should work smoothly according to the README instructions.")
        return 0
    else:
        print("\n[ERROR] Quickstart validation failed!")
        print("Please check the errors above and correct them before proceeding.")
        return 1


if __name__ == "__main__":
    sys.exit(main())