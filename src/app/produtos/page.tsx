'use client';

<<<<<<< HEAD
import CategoriasMenu from '@/componentes/Produtos/CategoriasMenu';
import GetProdutosDestaque from '@/componentes/Produtos/ProdutosGet';
=======
import Image from 'next/image';
import Link from 'next/link';
>>>>>>> 37638fe16e61df1b1aff9167dd0e0977ed1b54e6

export default function produtosPage() {
  return (
    <section className="my-32">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mx-4">
          Confira agora o nosso estoque de veículos
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-16 mx-4">
          <Link
            href="/"
            className="max-w-[470px] h-[420px] pt-4 bg-slate-50 shadow-lg flex flex-col justify-between"
          >
            <Image
              src="/assets/img/3.png"
              alt=""
              width={420}
              height={220}
              className="m-auto"
            />
            <div className="flex gap-4 justify-center">
              <h1 className="text-xl font-semibold">Honda Civic</h1>
              <Image src="/assets/icons/16.svg" alt="" width={25} height={25} />
            </div>
            <div className="flex gap-8 justify-center my-2">
              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/17.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>2015</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/18.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>GNV</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/19.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>100.111</p>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="max-w-[470px] h-[420px] pt-4 bg-slate-50 shadow-lg flex flex-col justify-between"
          >
            <Image
              src="/assets/img/3.png"
              alt=""
              width={420}
              height={220}
              className="m-auto w-[90%]"
            />
            <div className="flex gap-4 justify-center">
              <h1 className="text-xl font-semibold">Honda Civic</h1>
              <Image src="/assets/icons/16.svg" alt="" width={25} height={25} />
            </div>
            <div className="flex gap-8 justify-center my-2">
              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/17.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>2015</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/18.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>GNV</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/19.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>100.111</p>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="max-w-[470px] h-[420px] pt-4 bg-slate-50 shadow-lg flex flex-col justify-between"
          >
            <Image
              src="/assets/img/3.png"
              alt=""
              width={420}
              height={220}
              className="m-auto w-[90%]"
            />
            <div className="flex gap-4 justify-center">
              <h1 className="text-xl font-semibold">Honda Civic</h1>
              <Image src="/assets/icons/16.svg" alt="" width={25} height={25} />
            </div>
            <div className="flex gap-8 justify-center my-2">
              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/17.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>2015</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/18.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>GNV</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/19.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>100.111</p>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="max-w-[470px] h-[420px] pt-4 bg-slate-50 shadow-lg flex flex-col justify-between"
          >
            <Image
              src="/assets/img/3.png"
              alt=""
              width={420}
              height={220}
              className="m-auto w-[90%]"
            />
            <div className="flex gap-4 justify-center">
              <h1 className="text-xl font-semibold">Honda Civic</h1>
              <Image src="/assets/icons/16.svg" alt="" width={25} height={25} />
            </div>
            <div className="flex gap-8 justify-center my-2">
              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/17.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>2015</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/18.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>GNV</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/19.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>100.111</p>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="max-w-[470px] h-[420px] pt-4 bg-slate-50 shadow-lg flex flex-col justify-between"
          >
            <Image
              src="/assets/img/3.png"
              alt=""
              width={420}
              height={220}
              className="m-auto w-[90%]"
            />
            <div className="flex gap-4 justify-center">
              <h1 className="text-xl font-semibold">Honda Civic</h1>
              <Image src="/assets/icons/16.svg" alt="" width={25} height={25} />
            </div>
            <div className="flex gap-8 justify-center my-2">
              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/17.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>2015</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/18.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>GNV</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/19.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>100.111</p>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="max-w-[470px] h-[420px] pt-4 bg-slate-50 shadow-lg flex flex-col justify-between"
          >
            <Image
              src="/assets/img/3.png"
              alt=""
              width={420}
              height={220}
              className="m-auto w-[90%]"
            />
            <div className="flex gap-4 justify-center">
              <h1 className="text-xl font-semibold">Honda Civic</h1>
              <Image src="/assets/icons/16.svg" alt="" width={25} height={25} />
            </div>
            <div className="flex gap-8 justify-center my-2">
              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/17.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>2015</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/18.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>GNV</p>
              </div>

              <div className="flex gap-2 font-semibold text-lg">
                <Image
                  src="/assets/icons/19.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>100.111</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
