'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <section className="h-screen flex flex-col justify-center">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 w-96 md:w-[600px] xl:w-full mx-auto">
        <div className="shadow-md mx-4">
          <Image
            src="/assets/img/4.png"
            alt="chave de carro"
            width={650}
            height={600}
            className="xl:w-[650px]"
          />
        </div>
        <div className="mx-4 xl:w-[650px]">
          <h1 className="text-4xl xl:text-6xl mb-3">Quem somos</h1>
          <p className="xl:text-xl">
            Com a proposta de priorizar o Atendimento ao cliente a satisfação da
            compra e o respeito no pós venda, a Wilson automóveis vem se
            destacando dia após dia no mercado de venda de carros novos e
            semi-novos.
          </p>
          <p className="mt-4 xl:text-xl">
            Hoje em dia é muito fácil fechar uma venda de veículo. O cliente sai
            da sua loja feliz pela conquista porém, alguns dias depois esse
            sentimento é substituído pela frustração por conta de pendências
            burocráticas,aperto financeiro e até mesmo por problemas com o
            próprio veículo.
          </p>
          <p className="mt-4 xl:text-xl">
            É por isso que nós da Wilson Automóveis nos preocupamos com a venda
            como um todo. Provendo sempre todo o suporte ao cliente para que ele
            tenha que se preocupar o mínimo possível com cartórios, vistorias,
            revisões (todos os veículos já saem revisados) e pagamento de
            parcelas. Procuramos saber das reais possibilidades financeiras dos
            clientes para que o negócio certo se encaixe na sua rotina sem gerar
            apertos financeiros. E isso é ótimo pois podemos dizer que nossos
            clientes saem daqui satisfeitos e permanecem satisfeitos por muito
            tempo”.
          </p>
          <p className="mt-4">Flávio Diretor da Wilson Automóveis</p>
        </div>{' '}
        *
      </div>
      <div className="flex items-center sm:flex-row flex-wrap justify-center gap-8 mt-24">
        <div className="w-80 h-72 bg-[#EDEEF4] rounded-lg shadow-md flex flex-col justify-center items-center">
          <Image
            src="/assets/icons/24.svg"
            alt="chave de carro"
            width={180}
            height={180}
          />
          <p className="text-xl font-medium mt-2">Tradição</p>
        </div>

        <div className="w-80 h-72 bg-[#EDEEF4] rounded-lg shadow-md flex flex-col justify-center items-center">
          <Image
            src="/assets/icons/25.svg"
            alt="chave de carro"
            width={180}
            height={180}
          />
          <p className="text-xl font-medium mt-2">Atendimento</p>
        </div>

        <div className="w-80 h-72 bg-[#EDEEF4] rounded-lg shadow-md flex flex-col justify-center items-center">
          <Image
            src="/assets/icons/26.svg"
            alt="chave de carro"
            width={180}
            height={180}
          />
          <p className="text-xl font-medium mt-2">Estoque</p>
        </div>

        <div className="w-80 h-72 bg-[#EDEEF4] rounded-lg shadow-md flex flex-col justify-center items-center">
          <Image
            src="/assets/icons/27.svg"
            alt="chave de carro"
            width={180}
            height={180}
          />
          <p className="text-xl font-medium mt-2">Financiamento</p>
        </div>
      </div>
    </section>
  );
}
