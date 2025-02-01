import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welkom bij SaaS Commerce</h1>
      <p>Verkoop jouw producten eenvoudig online.</p>
      <Link href="/products"><a>Bekijk producten</a></Link>
    </div>
  );
}