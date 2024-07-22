import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-8 flex flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="absolute left-44 mt-10 space-x-4">
          <Image
            width={450}
            height={150}
            alt="logo"
            src="/assets/logotipo.png"
          />
        </div>

        <div className="flex gap-10 md:space-x-8 space-y-4 md:space-y-0">
          <div className="flex items-center gap-2 space-x-2">
            <Image
              width={35}
              height={35}
              alt="gps"
              src="/assets/icons/15.svg"
            />
            <Link
              href="/"
              className="text-white font-medium text-lg hover:text-gray-400"
            >
              Rua Bela vista, 50 São joão de meriti - RJ
            </Link>
          </div>
          <div className="flex items-center gap-2 space-x-2">
            <Image
              width={35}
              height={35}
              alt="telefone"
              src="/assets/icons/14.svg"
            />
            <Link
              href="/"
              className="text-white text-lg font-medium hover:text-gray-400"
            >
              (21) 98173-1525
            </Link>
          </div>
          <div className="flex items-center gap-2 space-x-2">
            <Image
              width={35}
              height={35}
              alt="email"
              src="/assets/icons/13.svg"
            />
            <Link
              href="/"
              className="text-white font-medium text-lg hover:text-gray-400"
            >
              contato@wilsonautomóveis
            </Link>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-5 mb-2">
        <Link href="/">
          <Image
            width={40}
            height={40}
            alt="Facebook"
            src="/assets/icons/10.svg"
            className="rounded-md hover:scale-125 duration-500"
          />
        </Link>
        <Link href="/">
          <Image
            width={40}
            height={40}
            alt="Instagram"
            src="/assets/icons/11.svg"
            className="rounded-md hover:scale-125 duration-500"
          />
        </Link>
        <Link href="/">
          <Image
            width={40}
            height={40}
            alt="LinkedIn"
            src="/assets/icons/12.svg"
            className="rounded-md hover:scale-125 duration-500"
          />
        </Link>
      </div>

      <div className="bg-red-500 text-center py-4 mt-4 w-full ">
        <p>©2023 Wilson Automóveis. Todos os direitos reservados</p>
        <p>Desenvolvido por Leandro Rosa</p>
      </div>
    </footer>
  );
}
