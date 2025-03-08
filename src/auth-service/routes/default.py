from fastapi import APIRouter, Request
import os

router = APIRouter()

@router.get("/")
def read_root(request: Request):
    port = request.url.port
    return {"message": f"Authentication service is running on port {port}"}