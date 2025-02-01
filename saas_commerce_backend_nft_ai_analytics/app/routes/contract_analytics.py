from fastapi import APIRouter
from app.contract_analytics.analytics import get_contract_transactions

router = APIRouter()

@router.get("/transactions/{contract_address}")
def fetch_contract_transactions(contract_address: str):
    transactions = get_contract_transactions(contract_address)
    return {"transactions": transactions}
