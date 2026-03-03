import { Icon } from "@iconify/react";

export default function App() {
  return (
    <section className="bg-white py-12 px-6 md:py-16 md:px-16">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">

       <img src="/images/app.png" alt="App" className="w-2/3 max-w-[280px] md:w-1/2 md:max-w-none" />
       

        {/* Lado direito — textos e botões */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left md:gap-5">
          <h1 className="text-3xl font-black uppercase leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Instale no seu<br />celular agora!
          </h1>

          <p className="text-[13px] font-bold uppercase tracking-wide text-gray-700 leading-snug md:text-[15px]">
            Tenha o controle do seu plano<br />inteiro na palma da sua mão!
          </p>

          {/* Botão da loja */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=br.com.lifeconnectionsbrapp&hl=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/Android.png" alt="Android" className="w-40 hover:scale-105 transition-all duration-300 cursor-pointer md:w-2/3" />
            </a>
          </div>

          <p className="text-[13px] uppercase font-semibold leading-relaxed text-gray-800 md:text-[14px] md:max-w-sm">
            Pronto!<br />
            Agora você tem inúmeras<br />
            possiblidade e funções na<br />
            tela do seu celular!
          </p>
        </div>

      </div>
    </section>
  );
}
