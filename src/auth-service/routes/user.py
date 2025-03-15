# from fastapi import APIRouter, Depends, HTTPException, status
# from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
# from datetime import timedelta
# from models.user import User, Token
# from auth.auth_handler import create_access_token, decode_access_token
# from auth.auth_bearer import JWTBearer
# from services.userservice import authenticate_user, get_user,fake_users_db

# router = APIRouter()

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# async def get_current_user(token: str = Depends(oauth2_scheme)):
#     credentials_exception = HTTPException(
#         status_code=status.HTTP_401_UNAUTHORIZED,
#         detail="Could not validate credentials",
#         headers={"WWW-Authenticate": "Bearer"},
#     )
#     payload = decode_access_token(token)
#     if payload is None:
#         raise credentials_exception
#     username: str = payload.get("sub")
#     if username is None:
#         raise credentials_exception
#     user = get_user(fake_users_db, username=username)
#     if user is None:
#         raise credentials_exception
#     return user

# @router.post("/token", response_model=Token)
# async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
#     user = authenticate_user(fake_users_db, form_data.username, form_data.password)
#     if not user:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect username or password",
#             headers={"WWW-Authenticate": "Bearer"},
#         )
#     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     access_token = create_access_token(
#         data={"sub": user.username}, expires_delta=access_token_expires
#     )
#     return {"access_token": access_token, "token_type": "bearer"}

# @router.get("/users/me", response_model=User, dependencies=[Depends(JWTBearer())])
# async def read_users_me(current_user: User = Depends(get_current_user)):
#     return current_user

# # Define the ACCESS_TOKEN_EXPIRE_MINUTES variable here
# ACCESS_TOKEN_EXPIRE_MINUTES = 30

from fastapi import APIRouter, HTTPException, status, Form
import requests
import os 
import logging
KEYCLOAK_URL = os.getenv("KEYCLOAK_URL")
REALM_NAME = os.getenv("REALM_NAME")
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")

router = APIRouter()

@router.post("/login")
async def login(
    username: str = Form(...),
    password: str = Form(...)
):
    """Authenticate with Keycloak and get JWT token"""
    token_url = "http://localhost:8080/realms/devrealm/protocol/openid-connect/token"
    logging.info(f"username:{username} password:{password}")
    print(f"username:{username} password:{password}")   
    data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "username": username,
        "password": password,
        "grant_type": "password"
    }

    try:
        response = requests.post(
            token_url,
            data=data,
            headers={"Content-Type": "application/x-www-form-urlencoded"}
        )
        response.raise_for_status()
        return response.json()
        
    except requests.exceptions.HTTPError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
    
@router.post("/test-settings")
async def test_settings():
    return {
        "keycloak_url": KEYCLOAK_URL,
        "realm": REALM_NAME,
        "client_secret":CLIENT_SECRET
    }