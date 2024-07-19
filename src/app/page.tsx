import Footer from '@/componentes/Footer/Footer';
import Header from '@/componentes/Header/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <hr />
        <Image
          width={1920}
          height={80}
          src="/assets/bg/1.png"
          alt="Banner do Wilson Automóveis"
        />
        <hr />
      </section>

      <section>
        <div>
          <h1>Diversas marcas e modelos para você escolher !!</h1>
          <hr />
        </div>

        <div>
          <nav>
            <ul>
              <li>
                <Link href="/">HATCH</Link>
              </li>
              <li>
                <Link href="/">PICK UP</Link>
              </li>
              <li>
                <Link href="/">SUV</Link>
              </li>
              <li>
                <Link href="/">SEDAN</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section>
        <h1>Confira agora os nossos veículos em destaque !!</h1>

        <div>
          <div>
            <Image
              width={310}
              height={200}
              src="/assets/img/1.png"
              alt="logotipo Wilson Automóveis"
            />
            <h2>Ford Ranger XLS</h2>
            <div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/20.svg"
                  alt="Quilometragem"
                />
                <hr />
                <p>120 Km</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/17.svg"
                  alt="Ano"
                />
                <hr />
                <p>2009</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/18.svg"
                  alt="Combustível"
                />
                <hr />
                <p>120 Km</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/19.svg"
                  alt="Valor"
                />
                <hr />
                <p>57.990</p>
                <hr />
              </div>
            </div>
            <Link href="/">Detalhes</Link>
          </div>

          <div>
            <Image
              width={310}
              height={200}
              src="/assets/img/1.png"
              alt="logotipo Wilson Automóveis"
            />
            <h2>Ford Ranger XLS</h2>
            <div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/20.svg"
                  alt="Quilometragem"
                />
                <hr />
                <p>120 Km</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/17.svg"
                  alt="Ano"
                />
                <hr />
                <p>2009</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/18.svg"
                  alt="Combustível"
                />
                <hr />
                <p>120 Km</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/19.svg"
                  alt="Valor"
                />
                <hr />
                <p>57.990</p>
                <hr />
              </div>
            </div>
            <Link href="/">Detalhes</Link>
          </div>

          <div>
            <Image
              width={310}
              height={200}
              src="/assets/img/1.png"
              alt="logotipo Wilson Automóveis"
            />
            <h2>Ford Ranger XLS</h2>
            <div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/20.svg"
                  alt="Quilometragem"
                />
                <hr />
                <p>120 Km</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/17.svg"
                  alt="Ano"
                />
                <hr />
                <p>2009</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/18.svg"
                  alt="Combustível"
                />
                <hr />
                <p>120 Km</p>
                <hr />
              </div>
              <div>
                <Image
                  width={36}
                  height={36}
                  src="/assets/icons/19.svg"
                  alt="Valor"
                />
                <hr />
                <p>57.990</p>
                <hr />
              </div>
            </div>
            <Link href="/">Detalhes</Link>
          </div>
        </div>

        <div>
          <Link href="/">Mostrar todos os veículos</Link>
        </div>
      </section>

      <section>
        <div>
          <Image
            width={1920}
            height={300}
            alt="Carro"
            src="/assets/img/2.png"
          />
        </div>
        <div>
          <h1>Quer comprar ou vender seu veículo?</h1>
          <p>
            Pode colocar os seus carros à venda, registrando-se no nosso site.
            Venda o seu veículo da forma rápida e transparente. Cuidamos de toda
            parte burocrática para você.
          </p>
          <div>
            <Image
              width={200}
              height={200}
              alt="Carro"
              src="/assets/icons/1.svg"
            />
            <h2>Diversos modelos</h2>
            <p>
              Temos certeza de que você encontrará veículos de modelos adequados
              em nosso site.
            </p>
          </div>
          <div>
            <Image
              width={220}
              height={200}
              alt="Carro"
              src="/assets/icons/2.svg"
            />
            <h2>Seminovos</h2>
            <p>Todos os carros são revisados e possuem garantia de 90 dias</p>
          </div>
        </div>
        <Link href="/contato">Sale conosco</Link>
      </section>
      <section>
        <Image width={1920} height={300} alt="Carro" src="/assets/bg/2.png" />
        <Image width={300} height={300} alt="Like" src="/assets/icons/3.svg" />
        <h1>O que os nossos clientes estão dizendo?</h1>
        <p>Opine você também!</p>
        <div>
          <Image
            width={75}
            height={75}
            alt="perfil"
            src="/assets/icons/29.svg"
          />
          <p>
            Sou motorista de aplicativo e preciso do carro para trabalhar e na
            Wilson automóveis eu encontrei a oportunidade perfeita que cabia no
            meu bolso aliado a ótimas condições de pagamento e financiamento!
            Estou muito feliz e indico a Wilson Automóveis para amigos e
            familiares
          </p>
        </div>
        <div>
          <Image
            width={75}
            height={75}
            alt="perfil"
            src="/assets/icons/29.svg"
          />
          <p>
            Sou motorista de aplicativo e preciso do carro para trabalhar e na
            Wilson automóveis eu encontrei a oportunidade perfeita que cabia no
            meu bolso aliado a ótimas condições de pagamento e financiamento!
            Estou muito feliz e indico a Wilson Automóveis para amigos e
            familiares
          </p>
        </div>
        <div>
          <Image
            width={75}
            height={75}
            alt="perfil"
            src="/assets/icons/29.svg"
          />
          <p>
            Sou motorista de aplicativo e preciso do carro para trabalhar e na
            Wilson automóveis eu encontrei a oportunidade perfeita que cabia no
            meu bolso aliado a ótimas condições de pagamento e financiamento!
            Estou muito feliz e indico a Wilson Automóveis para amigos e
            familiares
          </p>
        </div>
        <div>
          <Image
            width={75}
            height={75}
            alt="perfil"
            src="/assets/icons/29.svg"
          />
          <p>
            Sou motorista de aplicativo e preciso do carro para trabalhar e na
            Wilson automóveis eu encontrei a oportunidade perfeita que cabia no
            meu bolso aliado a ótimas condições de pagamento e financiamento!
            Estou muito feliz e indico a Wilson Automóveis para amigos e
            familiares
          </p>
        </div>
      </section>

      <section>
        <Image width={300} height={300} alt="Like" src="/assets/icons/4.svg" />
        <h1>Últimos conteúdos</h1>
        <p>Fique por dentro do mercado automotivo</p>

        <div>
          <Image
            width={150}
            height={150}
            alt="celular"
            src="/assets/icons/5.svg"
          />
          <p>Saiba como baixar seu CRLV digital.</p>
          <Link href="/">Leia Mais</Link>
        </div>
        <div>
          <Image
            width={150}
            height={150}
            alt="painel"
            src="/assets/icons/6.svg"
          />
          <p>Como identificar quilometragem adulterada?</p>
          <Link href="/">Leia Mais</Link>
        </div>
        <div>
          <Image
            width={150}
            height={150}
            alt="Morista"
            src="/assets/icons/7.svg"
          />
          <p>
            Afinal, vale a pena ser motorista de aplicativo? Que carro você
            precisa ter?{' '}
          </p>
          <Link href="/">Leia Mais</Link>
        </div>
        <div>
          <Image
            width={150}
            height={150}
            alt="CNH suspesnsa"
            src="/assets/icons/8.svg"
          />
          <p>
            Cuidado para não ter a sua CNH suspensa, verifique agora sua
            pontuação!
          </p>
          <Link href="/">Leia Mais</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
