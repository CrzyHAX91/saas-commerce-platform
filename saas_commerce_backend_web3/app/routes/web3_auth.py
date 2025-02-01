from fastapi import APIRouter
from app.auth.web3_auth import verify_signature

router = APIRouter()

@router.post("/verify")
def verify_web3_user(message: str, signature: str, address: str):
    return verify_signature(message, signature, address)
