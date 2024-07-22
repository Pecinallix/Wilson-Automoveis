'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            width={270}
            height={80}
            src="/assets/logotipo.png"
            alt="logotipo Wilson Automóveis"
          />
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-10">
            <li>
              <Link
                href="/"
                className="text-lg font-semibold text-black hover:text-gray-700"
              >
                Quem somos
              </Link>
            </li>
            <li>
              <Link
                href="/produtos"
                className="text-lg font-semibold text-black hover:text-gray-700"
              >
                Veículos
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="text-lg font-semibold text-black hover:text-gray-700"
              >
                Onde Estamos
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-lg font-semibold text-black hover:text-gray-700"
              >
                Fale conosco
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <Link
            href="/compramos-seu-carro"
            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md"
          >
            Compramos seu carro
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        {/* Mobile menu items */}
        <ul className="flex flex-col items-center gap-4 p-4">
          <li>
            <Link
              href="/"
              className="text-lg font-semibold text-black hover:text-gray-700"
            >
              Quem somos
            </Link>
          </li>
          <li>
            <Link
              href="/produtos"
              className="text-lg font-semibold text-black hover:text-gray-700"
            >
              Veículos
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-lg font-semibold text-black hover:text-gray-700"
            >
              Onde Estamos
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="text-lg font-semibold text-black hover:text-gray-700"
            >
              Fale conosco
            </Link>
          </li>
          <li>
            <Link
              href="/compramos-seu-carro"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md"
            >
              Compramos seu carro
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
