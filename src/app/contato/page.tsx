'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContatoPage() {
  return (
    <section>
      <div className="bg-[url('/assets/bg/3.png')] w-full h-[450px] relative flex bg-cover border-y-4 border-red-500">
        <h1 className="text-6xl font-extrabold m-auto text-white">CONTATO</h1>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center py-28 gap-14 mx-">
        <div className="w-96 h-60 shadow-xl flex flex-col items-center justify-center bg-slate-50">
          <Image
            src="/assets/icons/21.svg"
            alt="icone telefone"
            width={60}
            height={60}
          />
          <h1 className="mt-8 text-lg font-semibold">ATENDIMENTO AO CLIENTE</h1>
          <p className="mt-2 text-lg font-semibold">(21) 98173-1525</p>
        </div>

        <div className="w-96 h-60 shadow-xl flex flex-col items-center justify-center bg-slate-50">
          <Image
            src="/assets/icons/22.svg"
            alt="icone email"
            width={60}
            height={60}
          />
          <h1 className="mt-8 text-lg font-semibold">EMAIL</h1>
          <p className="mt-2 text-lg font-semibold">vendas@wilsonautomoveis</p>
        </div>

        <div className="w-96 h-60 shadow-xl flex flex-col items-center justify-center bg-slate-50">
          <Image
            src="/assets/icons/23.svg"
            alt="icone local"
            width={60}
            height={60}
          />
          <h1 className="mt-8 text-lg font-semibold">NOSSA LOJA</h1>
          <p className="mt-2 text-lg font-semibold">
            Venha nos fazer uma visita
          </p>
        </div>
      </div>

      <div className="w-96 md:w-[750px] h-[550px] md:h-96 m-auto bg-slate-50 shadow-xl flex justify-center flex-col rounded-md">
        <form className="w-full mx-auto flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-8">
          <input
            type="text"
            id="nome"
            className="md:md:mb-5 bg-[#EDEEF4] text-gray-900 rounded-lg  block p-4 w-[80%] mx-auto text-center"
            placeholder="NOME"
          />
          <input
            type="text"
            id="email"
            className="bg-[#EDEEF4] md:mb-5 text-gray-900 rounded-lg  block p-4 w-[80%] mx-auto text-center"
            placeholder="EMAIL"
          />

          <input
            type="text"
            id="telefone"
            className="md:mb-5 bg-[#EDEEF4] text-gray-900 rounded-lg  block p-4 w-[80%] mx-auto text-center"
            placeholder="TELEFONE"
          />
          <input
            type="text"
            id="assunto"
            className="bg-[#EDEEF4] mb-8 md:mb-5 text-gray-900 rounded-lg  block p-4 w-[80%] mx-auto text-center"
            placeholder="ASSUNTO"
          />
        </form>
        <input
          type="text"
          id="mensagem"
          placeholder="DEIXE SUA MENSAGEM"
          className="mx-auto p-4 bg-[#EDEEF4] text-gray-900 rounded-lg  block text-center w-[80%] md:w-[90%] h-20"
        />
        <Link
          href="/"
          className="mt-4 p-6 bg-red-600 rounded-lg w-64 mx-auto text-white font-bold text-center"
        >
          ENVIAR
        </Link>
      </div>

      <div className="pt-24">
        <div className="w-[80%] mx-auto">
          <h1 className="text-6xl font-bold">Nossa loja</h1>
          <p className="text-lg">
            Atualmente, nossa loja fica localizada na rua Bela Vista , nº50 -
            Vilar dos Teles. <br /> Venha nos fazer uma visita e realize o sonho
            de ter seu carro próprio.
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3732837763105!2d-43.31173092390603!3d-22.788628233660347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997aea6643b655%3A0xe4516119cb567fb5!2sAv.%20Pres.%20Vargas%2C%292%20-%20Centro%2C%20Duque%20de%20Caxias%2C%20RJ%2C%25070-330!5e!3m2!1spt-BR!2sbr!4v1719441922450!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 mt-24"
        ></iframe>
      </div>
    </section>
  );
}
