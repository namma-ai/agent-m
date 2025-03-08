from fastapi import FastAPI
from routes import user,default


app = FastAPI()

app.include_router(default.router)
app.include_router(user.router)