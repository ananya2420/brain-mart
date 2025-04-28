import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="text-2xl font-bold">BrainMart</div>
      <ul className="flex gap-6">
        <li><Link href="/">Men</Link></li>
        <li><Link href="/">Women</Link></li>
        <li><Link href="/">Accessories</Link></li>
        <li><Link href="/">Summer Sale</Link></li>
        <li><Link href="/">Kids</Link></li>
      </ul>
      <div>
        <input className="border p-1" placeholder="Search" />
      </div>
    </nav>
  );
}
