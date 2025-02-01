import { useState } from 'react';
import axios from 'axios';

export default function NFTMarketplace() {
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const [transaction, setTransaction] = useState(null);

  const listNFT = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/nft_marketplace/list', {
        token_id: tokenId,
        price: price,
        sender_address: '0xYourWalletAddress',
        private_key: 'YourPrivateKey'
      });
      setTransaction(response.data.transaction_hash);
    } catch (error) {
      console.error('Error listing NFT:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>NFT Marktplaats</h1>
      <input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
      <input placeholder="Prijs (ETH)" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={listNFT}>List NFT</button>
      {transaction && <p>Transactie Hash: {transaction}</p>}
    </div>
  );
}