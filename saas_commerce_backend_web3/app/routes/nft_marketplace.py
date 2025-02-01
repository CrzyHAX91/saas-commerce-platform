from fastapi import APIRouter, HTTPException
from app.nft_marketplace.marketplace import list_nft

router = APIRouter()

@router.post("/list")
def list_new_nft(token_id: int, price: int, sender_address: str, private_key: str):
    try:
        tx_hash = list_nft(token_id, price, sender_address, private_key)
        return {"transaction_hash": tx_hash}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
