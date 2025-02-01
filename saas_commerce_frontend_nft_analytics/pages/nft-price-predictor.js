import { useState } from 'react';
import axios from 'axios';

export default function NFTPricePredictor() {
  const [popularity, setPopularity] = useState('');
  const [rarity, setRarity] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);

  const predictPrice = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/nft_ai/predict', {
        popularity: parseInt(popularity),
        rarity: parseInt(rarity)
      });
      setPredictedPrice(response.data.predicted_price_eth);
    } catch (error) {
      console.error('Error predicting NFT price:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>NFT Prijsvoorspelling</h1>
      <input placeholder="Populariteit (views)" value={popularity} onChange={(e) => setPopularity(e.target.value)} />
      <input placeholder="Zeldzaamheid (score)" value={rarity} onChange={(e) => setRarity(e.target.value)} />
      <button onClick={predictPrice}>Voorspel prijs</button>
      {predictedPrice && <p>Geschatte prijs: {predictedPrice.toFixed(2)} ETH</p>}
    </div>
  );
}