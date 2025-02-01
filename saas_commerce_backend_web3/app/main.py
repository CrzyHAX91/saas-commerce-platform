from fastapi import FastAPI
from app.routes import chatbot, nft_marketplace, web3_auth

app = FastAPI()

app.include_router(chatbot.router, prefix="/chatbot", tags=["AI Chatbot"])
app.include_router(nft_marketplace.router, prefix="/nft_marketplace", tags=["NFT Marketplace"])
app.include_router(web3_auth.router, prefix="/auth", tags=["Web3 Authentication"])

@app.get("/")
def home():
    return {"message": "SaaS Commerce API with AI Chatbot, NFT Marketplace & Web3 Authentication is running!"}
