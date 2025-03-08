from pydantic import BaseModel
from typing import Union  # Add this import statement

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Union[str, None] = None

class User(BaseModel):
    str

class UserInDB(User):
    hashed_password: str