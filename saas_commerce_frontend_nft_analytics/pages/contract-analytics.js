import { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

export default function ContractAnalytics() {
  const [contractAddress, setContractAddress] = useState('');
  const [transactionData, setTransactionData] = useState(null);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/contract_analytics/transactions/${contractAddress}`);
      setTransactionData(response.data.transactions);
    } catch (error) {
      console.error('Error fetching contract analytics:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Smart Contract Analytics</h1>
      <input placeholder="Contractadres" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} />
      <button onClick={fetchTransactions}>Laad transactiegegevens</button>
      {transactionData && (
        <Bar data={{
          labels: transactionData.transaction_hash,
          datasets: [{
            label: 'NFT Transacties (ETH)',
            data: transactionData.value_eth,
          }]
        }} />
      )}
    </div>
  );
}