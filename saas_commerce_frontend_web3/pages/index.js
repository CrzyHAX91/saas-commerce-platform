import Link from 'next/link';

export default function Web3Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Web3 Dashboard</h1>
      <p>Beheer je NFT’s en Web3-authenticatie.</p>
      <Link href="/nft-marketplace"><a>Ga naar NFT Marktplaats</a></Link> | 
      <Link href="/web3-auth"><a>Web3 Authenticatie</a></Link>
    </div>
  );
}