import { useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';

export default function Web3Auth() {
  const [account, setAccount] = useState(null);
  const [signature, setSignature] = useState(null);
  const [verified, setVerified] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } else {
      alert('Metamask is niet geïnstalleerd!');
    }
  };

  const signMessage = async () => {
    if (!account) return;
    const web3 = new Web3(window.ethereum);
    const message = "Verifieer je login voor SaaS Commerce Web3";
    const signedMessage = await web3.eth.personal.sign(message, account, '');
    setSignature(signedMessage);
  };

  const verifySignature = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/verify', {
        message: "Verifieer je login voor SaaS Commerce Web3",
        signature: signature,
        address: account
      });
      setVerified(response.data.verified);
    } catch (error) {
      console.error('Error verifying signature:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Web3 Authenticatie</h1>
      <button onClick={connectWallet}>Verbinden met Wallet</button>
      {account && <p>Wallet: {account}</p>}
      {account && <button onClick={signMessage}>Onderteken bericht</button>}
      {signature && <button onClick={verifySignature}>Verifieer handtekening</button>}
      {verified !== null && <p>{verified ? "✅ Verificatie geslaagd" : "❌ Verificatie mislukt"}</p>}
    </div>
  );
}