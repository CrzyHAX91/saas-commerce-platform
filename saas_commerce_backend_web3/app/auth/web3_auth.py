from fastapi import APIRouter, HTTPException
from web3 import Web3

router = APIRouter()
w3 = Web3(Web3.HTTPProvider("https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID"))

@router.post("/verify-signature")
def verify_signature(message: str, signature: str, address: str):
    try:
        recovered_address = w3.eth.account.recover_message(text=message, signature=signature)
        if recovered_address.lower() == address.lower():
            return {"verified": True}
        else:
            return {"verified": False}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
