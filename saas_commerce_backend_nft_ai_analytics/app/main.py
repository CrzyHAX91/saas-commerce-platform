from fastapi import FastAPI
from app.routes import nft_price_predictor, contract_analytics

app = FastAPI()

app.include_router(nft_price_predictor.router, prefix="/nft_ai", tags=["NFT AI Price Predictor"])
app.include_router(contract_analytics.router, prefix="/contract_analytics", tags=["Smart Contract Analytics"])

@app.get("/")
def home():
    return {"message": "SaaS Commerce API with AI NFT Price Prediction & Smart Contract Analytics is running!"}
