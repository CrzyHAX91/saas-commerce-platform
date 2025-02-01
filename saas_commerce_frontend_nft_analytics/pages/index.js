import Link from 'next/link';

export default function NFTAnalyticsHome() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>NFT Analytics & AI Price Prediction</h1>
      <p>Bekijk transactiegegevens en voorspel NFT-prijzen.</p>
      <Link href="/nft-price-predictor"><a>NFT Prijsvoorspelling</a></Link> | 
      <Link href="/contract-analytics"><a>Smart Contract Analytics</a></Link>
    </div>
  );
}