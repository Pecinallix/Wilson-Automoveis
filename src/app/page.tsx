import Footer from '@/componentes/Footer/Footer';
import Header from '@/componentes/Header/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <div className="bg-[url('/assets/bg/1.png')] h-[600px] border-b-4 border-t-4 border-red-500 bg-top bg-cover"></div>
      </section>

      <section className="text-center py-12 flex justify-center flex-col items-center">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            DIVERSAS MARCAS E MODELOS PARA VOCÊ ESCOLHER !!
            <hr className="border-red-500 border-2 -mx-5" />
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="w-56 h-56 shadow-md rounded-lg hover:scale-110 duration-500 cursor-pointer flex flex-col items-center">
                <Image
                  width={192}
                  height={192}
                  src="/assets/img/5.png"
                  alt="Hatch"
                  className="object-cover"
                />
                <span className="mt-4 text-lg font-semibold">HATCH</span>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="w-56 h-56 shadow-md rounded-lg hover:scale-110 duration-500 cursor-pointer flex flex-col items-center">
                <Image
                  width={192}
                  height={192}
                  src="/assets/img/6.png"
                  alt="Pick Up"
                  className="object-cover"
                />
                <span className="mt-4 text-lg font-semibold">PICK UP</span>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="w-56 h-56 shadow-md rounded-lg hover:scale-110 duration-500 cursor-pointer flex flex-col items-center">
                <Image
                  width={192}
                  height={192}
                  src="/assets/img/7.png"
                  alt="SUV"
                  className="object-cover"
                />
                <span className="mt-4 text-lg font-semibold">SUV</span>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="w-56 h-56 shadow-md rounded-lg hover:scale-110 duration-500 cursor-pointer flex flex-col items-center">
                <Image
                  width={192}
                  height={192}
                  src="/assets/img/8.png"
                  alt="Sedan"
                  className="object-cover"
                />
                <span className="mt-4 text-lg font-semibold">SEDAN</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-16">
          CONFIRA AGORA OS NOSSOS VEÍCULOS EM DESTAQUE !!
        </h1>

        <div className="flex flex-wrap gap-10 justify-center">
          <Link href="/">
            <div className="border rounded-lg p-4 shadow-md w-[360px]">
              <div>
                <Image
                  width={310}
                  height={200}
                  src="/assets/img/1.png"
                  alt="logotipo Wilson Automóveis"
                  className="w-full h-auto mb-4 rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mb-3">Honda Civic LXS</h2>
              </div>
              <div className="flex justify-between items-center text-gray-600 mx-10">
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/20.svg"
                    alt="Quilometragem"
                  />
                  <p className="ml-3 font-semibold text-xl">120 Km</p>
                </div>
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/17.svg"
                    alt="Ano"
                  />
                  <p className="ml-3 font-semibold text-xl">2009</p>
                </div>
              </div>

              <hr className="h-[3px] bg-black mx-2 mt-2" />

              <div className="flex justify-between items-center text-gray-600 mx-10 my-5">
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/18.svg"
                    alt="Combustível"
                  />
                  <p className="ml-3 font-semibold text-xl">120 Km</p>
                </div>
                <div className="flex items-center -mr-3">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/19.svg"
                    alt="Valor"
                  />
                  <p className="ml-3 font-semibold text-xl">57.990</p>
                </div>
              </div>

              <hr className="h-[3px] bg-black mx-2 -mt-2" />

              <div className="mb-5 mt-8">
                <span className="text-center text-red-500 border border-red-500 px-8 py-3 rounded-md transition-colors duration-300 hover:bg-red-500 hover:text-white text-lg font-semibold">
                  Detalhes
                </span>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="border rounded-lg p-4 shadow-md w-[360px]">
              <div>
                <Image
                  width={310}
                  height={200}
                  src="/assets/img/1.png"
                  alt="logotipo Wilson Automóveis"
                  className="w-full h-auto mb-4 rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mb-3">Honda Civic LXS</h2>
              </div>
              <div className="flex justify-between items-center text-gray-600 mx-10">
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/20.svg"
                    alt="Quilometragem"
                  />
                  <p className="ml-3 font-semibold text-xl">120 Km</p>
                </div>
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/17.svg"
                    alt="Ano"
                  />
                  <p className="ml-3 font-semibold text-xl">2009</p>
                </div>
              </div>

              <hr className="h-[3px] bg-black mx-2 mt-2" />

              <div className="flex justify-between items-center text-gray-600 mx-10 my-5">
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/18.svg"
                    alt="Combustível"
                  />
                  <p className="ml-3 font-semibold text-xl">120 Km</p>
                </div>
                <div className="flex items-center -mr-3">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/19.svg"
                    alt="Valor"
                  />
                  <p className="ml-3 font-semibold text-xl">57.990</p>
                </div>
              </div>

              <hr className="h-[3px] bg-black mx-2 -mt-2" />

              <div className="mb-5 mt-8">
                <span className="text-center text-red-500 border border-red-500 px-8 py-3 rounded-md transition-colors duration-300 hover:bg-red-500 hover:text-white text-lg font-semibold">
                  Detalhes
                </span>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="border rounded-lg p-4 shadow-md w-[360px]">
              <div>
                <Image
                  width={310}
                  height={200}
                  src="/assets/img/1.png"
                  alt="logotipo Wilson Automóveis"
                  className="w-full h-auto mb-4 rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mb-3">Honda Civic LXS</h2>
              </div>
              <div className="flex justify-between items-center text-gray-600 mx-10">
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/20.svg"
                    alt="Quilometragem"
                  />
                  <p className="ml-3 font-semibold text-xl">120 Km</p>
                </div>
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/17.svg"
                    alt="Ano"
                  />
                  <p className="ml-3 font-semibold text-xl">2009</p>
                </div>
              </div>

              <hr className="h-[3px] bg-black mx-2 mt-2" />

              <div className="flex justify-between items-center text-gray-600 mx-10 my-5">
                <div className="flex items-center">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/18.svg"
                    alt="Combustível"
                  />
                  <p className="ml-3 font-semibold text-xl">120 Km</p>
                </div>
                <div className="flex items-center -mr-3">
                  <Image
                    width={36}
                    height={36}
                    src="/assets/icons/19.svg"
                    alt="Valor"
                  />
                  <p className="ml-3 font-semibold text-xl">57.990</p>
                </div>
              </div>

              <hr className="h-[3px] bg-black mx-2 -mt-2" />

              <div className="mb-5 mt-8">
                <span className="text-center text-red-500 border border-red-500 px-8 py-3 rounded-md transition-colors duration-300 hover:bg-red-500 hover:text-white text-lg font-semibold">
                  Detalhes
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 ">
          <Link
            href="/"
            className="text-lg font-semibold text-red-500 border border-red-500 px-6 py-3 rounded-md transition-colors duration-300 hover:bg-red-500 hover:text-white"
          >
            Mostrar todos os veículos
          </Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center py-12 ">
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <Image
            width={500}
            height={300}
            alt="Carro"
            src="/assets/img/2.png"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left px-4 md:px-8 ml-10">
          <div className="w-[430px]">
            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
              Quer comprar ou vender seu veículo?
            </h1>
            <p className="text-gray-700 mb-6">
              Pode colocar os seus carros à venda, registrando-se no nosso site.
              Venda o seu veículo da forma rápida e transparente. Cuidamos de
              toda parte burocrática para você.
            </p>
          </div>
          <div className="flex flex-col space-y-6 w-[430px]">
            <div className="flex items-center">
              <Image
                width={100}
                height={100}
                alt="Carro"
                src="/assets/icons/1.svg"
                className="mr-4"
              />
              <div className="ml-10">
                <h2 className="text-lg font-semibold text-gray-800">
                  Diversos modelos
                </h2>
                <p className="text-gray-600">
                  Temos certeza de que você encontrará veículos de modelos
                  adequados em nosso site.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                width={100}
                height={100}
                alt="Carro"
                src="/assets/icons/2.svg"
                className="mr-4"
              />
              <div className="ml-10">
                <h2 className="text-lg font-semibold text-gray-800">
                  Seminovos
                </h2>
                <p className="text-gray-600">
                  Todos os carros são revisados e possuem garantia de 90 dias
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 ml-20">
            <Link
              href="/contato"
              className="bg-red-500 text-white text-xl font-semibold py-4 px-10 rounded-xl transition-colors duration-300 hover:bg-red-600"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[url('/assets/bg/2.png')] text-white py-12">
        <div className="mb-8 text-center">
          <Image
            width={150}
            height={150}
            alt="Like"
            src="/assets/icons/3.svg"
            className="mx-auto mb-5"
          />
          <h1 className="text-2xl md:text-3xl font-bold mb-5">
            O que os nossos clientes estão dizendo?
          </h1>
          <p className="text-lg mb-8">Opine você também!</p>
        </div>

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-center mb-4">
              <Image
                width={75}
                height={75}
                alt="perfil"
                src="/assets/icons/29.svg"
                className="rounded-full"
              />
            </div>
            <p>
              Depois de muito procurar encontrei o meu carro dos sonhos na{' '}
              <span className="text-red-500 font-bold">Wilson Automóveis</span>{' '}
              , o atendimento foi sensacional e todo o cuidado com a
              documentação que eles tiveram foi um dos diferenciais que me
              fizeram virar cliente fiel deles
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-center mb-4">
              <Image
                width={75}
                height={75}
                alt="perfil"
                src="/assets/icons/30.svg"
                className="rounded-full"
              />
            </div>
            <p>
              Depois de rodar em várias lojas das redondezas em busca do meu
              carro, quase desisti, pois minha ficha não aprovava em nenhuma.
              Mas na{' '}
              <span className="text-red-500 font-bold">Wilson Automóveis</span>{' '}
              eu fui aprovado no financiamento do meu veículo, estou muito feliz
              e agora com certeza só compro aqui
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-center mb-4">
              <Image
                width={75}
                height={75}
                alt="perfil"
                src="/assets/icons/31.svg"
                className="rounded-full"
              />
            </div>
            <p>
              Estou muito feliz por conseguir comprar meu Ford ka 2022 na{' '}
              <span className="text-red-500 font-bold">Wilson Automóveis</span>{' '}
              , indiquei para o meu pai e ele já comprou o dele. Atendimento
              excelente, carros de procedência valeu cada centavo investido
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-center mb-4 ">
              <Image
                width={75}
                height={75}
                alt="perfil"
                src="/assets/icons/32.svg"
                className="rounded-full"
              />
            </div>
            <p>
              Sou motorista de aplicativo e preciso do carro para trabalhar e na{' '}
              <span className="text-red-500 font-bold">Wilson Automóveis</span>{' '}
              eu encontrei a oportunidade perfeita que cabia no meu bolso aliado
              a ótimas condições de pagamento e financiamento! Estou muito feliz
              e indico a Wilson Automóveis para amigos e familiares
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <div className="mb-8">
          <Image
            width={150}
            height={150}
            alt="Like"
            src="/assets/icons/4.svg"
            className="mx-auto mb-5"
          />
          <h1 className="text-2xl md:text-3xl font-bold mb-5">
            Últimos conteúdos
          </h1>
          <p className="text-lg mb-8">Fique por dentro do mercado automotivo</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex items-center justify-center mb-4">
              <Image
                width={250}
                height={250}
                alt="celular"
                src="/assets/icons/6.svg"
                className="rounded-lg"
              />
            </div>
            <p className="mb-4">
              Saiba como baixar seu
              <br /> CRLV digital.
            </p>
            <Link
              href="/crlv"
              className="text-center text-white bg-red-500 px-8 py-2 rounded-md transition-colors duration-300 hover:bg-red-600 font-semibold"
            >
              Leia Mais
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-center mb-4">
              <Image
                width={250}
                height={250}
                alt="painel"
                src="/assets/icons/7.svg"
                className="rounded-lg"
              />
            </div>
            <p className="mb-4">Como identificar quilometragem adulterada?</p>
            <Link
              href="/km"
              className="text-center text-white bg-red-500 px-8 py-2 rounded-md transition-colors duration-300 hover:bg-red-600 font-semibold"
            >
              Leia Mais
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-center mb-4">
              <Image
                width={250}
                height={250}
                alt="Morista"
                src="/assets/icons/8.svg"
                className="rounded-lg"
              />
            </div>
            <p className="mb-4">
              Afinal, vale a pena ser motorista de aplicativo? Que carro você
              precisa ter?
            </p>
            <Link
              href="/motorista"
              className="text-center text-white bg-red-500 px-8 py-2 rounded-md transition-colors duration-300 hover:bg-red-600 font-semibold"
            >
              Leia Mais
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-center mb-4">
              <Image
                width={250}
                height={250}
                alt="CNH suspensa"
                src="/assets/icons/9.svg"
                className="rounded-lg"
              />
            </div>
            <p className="mb-4">
              Cuidado para não ter a sua CNH suspensa, verifique agora sua
              pontuação!
            </p>
            <Link
              href="/cnh"
              className="text-center text-white bg-red-500 px-8 py-2 rounded-md transition-colors duration-300 hover:bg-red-600 font-semibold"
            >
              Leia Mais
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
