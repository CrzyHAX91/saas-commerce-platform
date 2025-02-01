from fastapi import APIRouter
from app.nft_ai.price_prediction import predict_nft_price

router = APIRouter()

@router.post("/predict")
def ai_nft_price(popularity: int, rarity: int):
    price_prediction = predict_nft_price(popularity, rarity)
    return {"predicted_price_eth": price_prediction}
