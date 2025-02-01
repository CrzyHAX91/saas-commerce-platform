from fastapi import APIRouter

router = APIRouter()

@router.post("/register")
def register_user(email: str, password: str):
    return {"message": "User registered successfully!"}

@router.post("/login")
def login_user(email: str, password: str):
    return {"message": "User logged in!"}
