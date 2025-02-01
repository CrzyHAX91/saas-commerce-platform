import stripe
from fastapi import APIRouter, HTTPException
import os

router = APIRouter()

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

@router.post("/create-checkout-session")
def create_checkout_session(amount: int, currency: str = "eur"):
    try:
        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=[{"price_data": {"currency": currency, "product_data": {"name": "Subscription Plan"}, "unit_amount": amount}, "quantity": 1}],
            mode="payment",
            success_url="https://your-site.com/success",
            cancel_url="https://your-site.com/cancel",
        )
        return {"checkout_url": session.url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
