from fastapi import APIRouter
from app.chatbot.bot import chatbot_response

router = APIRouter()

@router.post("/ask")
def ask_chatbot(prompt: str):
    response = chatbot_response(prompt)
    return {"response": response}
