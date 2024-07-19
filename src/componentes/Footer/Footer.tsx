import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div>
        <Image width={350} height={80} alt="logo" src="/assets/logotipo.png" />
        <div>
          <Image width={31} height={31} alt="gps" src="/assets/icons/15.svg" />
          <Link href="/">Rua Bela vista, 50 São joão de meriti - RJ</Link>
        </div>
        <div>
          <Image
            width={31}
            height={31}
            alt="telefone"
            src="/assets/icons/14.svg"
          />
          <Link href="/">(21) 9 8173 1525</Link>
        </div>
        <div>
          <Image
            width={31}
            height={31}
            alt="email"
            src="/assets/icons/13.svg"
          />
          <Link href="/">contato@wilsonautomóveis</Link>
        </div>
        <div>
          <Link href="/">
            <Image
              width={40}
              height={40}
              alt="Facebook"
              src="/assets/icons/10.svg"
            />
          </Link>
          <Link href="/">
            <Image
              width={40}
              height={40}
              alt="Instagram"
              src="/assets/icons/11.svg"
            />
          </Link>
          <Link href="/">
            <Image
              width={40}
              height={40}
              alt="linkedin"
              src="/assets/icons/12.svg"
            />
          </Link>
        </div>
      </div>
      <div>
        <p>©2023 Wilson Automóveis. Todos os direitos reservados</p>
        <p>Desenvolvido por Leandro Rosa</p>
      </div>
    </footer>
  );
}
