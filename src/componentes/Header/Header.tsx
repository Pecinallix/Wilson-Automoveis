'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <Image
          width={270}
          height={80}
          src="/assets/logotipo.png"
          alt="logotipo Wilson Automóveis"
        />
        <nav>
          <ul>
            <li>
              <Link href="/">INÍCIO</Link>
            </li>
            <li>
              <Link href="/produtos">PRODUTOS</Link>
            </li>
            <li>
              <Link href="/sobre">QUEM SOMOS</Link>
            </li>
            <li>
              <Link href="/contato">CONTATO</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/">Compramos seu carro</Link>
        </div>
      </div>
    </header>
  );
}
