# tests/e2e/test_dashboard_e2e.py

"""
End-to-end tests for the Agent Dashboard.
These tests verify the full user journey and integration between components.
"""

import pytest
from playwright.sync_api import Page, expect


@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    """Set up browser context with wider viewport for dashboard testing."""
    return {
        **browser_context_args,
        "viewport": {"width": 1920, "height": 1080},  # Full HD for dashboard
        "ignore_https_errors": True,
    }


def test_full_dashboard_workflow(page: Page):
    """
    Test the complete user journey:
    1. Navigate to login page
    2. Enter correct credentials
    3. Verify access to dashboard
    4. Check that agent information is displayed
    5. Log out
    """
    # 1. Navigate to login page
    page.goto("http://localhost:3000/login")
    
    # Verify login page loaded
    expect(page.locator("text=Agent Dashboard Login")).to_be_visible()
    
    # 2. Enter correct credentials
    page.fill("#username", "imsanghaar")
    page.fill("#password", "Sanghaar-AI2008")
    
    # Click sign in
    page.click("button:has-text('Sign in')")
    
    # 3. Verify access to dashboard
    expect(page).to_have_url("http://localhost:3000/dashboard")
    expect(page.locator("text=Agent Dashboard")).to_be_visible()
    
    # 4. Check that agent information is displayed
    expect(page.locator("text=Agent Status")).to_be_visible()
    expect(page.locator("text=Running Time")).to_be_visible()
    expect(page.locator("text=Search Details")).to_be_visible()
    
    # 5. Log out
    page.click("button:has-text('Logout')")
    
    # Verify redirect to login
    expect(page).to_have_url("http://localhost:3000/login")
    expect(page.locator("text=Agent Dashboard Login")).to_be_visible()


def test_invalid_login(page: Page):
    """
    Test that invalid credentials are rejected.
    """
    # Navigate to login page
    page.goto("http://localhost:3000/login")
    
    # Enter incorrect credentials
    page.fill("#username", "wronguser")
    page.fill("#password", "wrongpassword")
    
    # Click sign in
    page.click("button:has-text('Sign in')")
    
    # Verify error message appears
    expect(page.locator("text=Incorrect username or password")).to_be_visible()


def test_protected_route_redirect(page: Page):
    """
    Test that navigating directly to dashboard redirects to login.
    """
    # Attempt to access dashboard directly
    page.goto("http://localhost:3000/dashboard")
    
    # Verify redirect to login
    expect(page).to_have_url("http://localhost:3000/login")
    expect(page.locator("text=Agent Dashboard Login")).to_be_visible()