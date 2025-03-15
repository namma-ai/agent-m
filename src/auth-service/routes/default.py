from fastapi import APIRouter, Request , Depends
from auth.auth_bearer import security
import os

router = APIRouter()

@router.get("/")
def read_root(request: Request):
    port = request.url.port
    return {"message": f"Authentication service is running on port {port}"}


@router.get("/test-token")
async def test_token_validation(
    token_data: dict = Depends(security)
):
    """Test endpoint for token validation"""
    return {
        "message": "Token is valid",
        "user_info": {
            "username": token_data.get("preferred_username"),
            "email": token_data.get("email"),
            "roles": token_data.get("realm_access", {}).get("roles", [])
        }
    }