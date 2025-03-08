from models.user import UserInDB

fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "hashed_password": "fakehashedpassword"
    }
}

def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)

def verify_password(plain_password, hashed_password):
    return plain_password == hashed_password

def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user