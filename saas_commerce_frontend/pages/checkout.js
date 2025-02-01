import { useState } from 'react';
import axios from 'axios';

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8000/payments/create-checkout-session', {
        amount: 1000, // 10 euro
        currency: "eur"
      });
      window.location.href = response.data.checkout_url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Betaal je abonnement</h1>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Laden..." : "Betaal €10"}
      </button>
    </div>
  );
}