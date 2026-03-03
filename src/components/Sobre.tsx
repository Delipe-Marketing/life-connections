export default function FaleConosco() {
  return (
    <section id="sobre" className="bg-white py-16 px-8 md:px-16">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">

        {/* Lado esquerdo — foto da equipe */}
        <div className="relative flex-shrink-0 w-full md:w-[420px]">
          <img
            src="/images/equipe.png"
            alt="Equipe Life Connections"
            className="w-full rounded-2xl object-cover md:w-8/10 md:ml-auto"
          />
        </div>

        {/* Lado direito — textos */}
        <div className="flex flex-col gap-4 md:gap-5 text-center md:text-left">
          <h1 className="text-2xl font-black uppercase leading-tight  text-gray-900 md:text-3xl lg:text-4xl">
            Internet que entende<br />
            atende e{" "}
            <span className="font-black">surpreende você!</span>
          </h1>

          <p className="text-[12px] font-semibold uppercase leading-relaxed tracking-wide text-gray-600 md:text-[13px]">
            Fundada em 2010, a Life Connections é um provedor de internet licenciado pela
            Anatel, e tem como principal objetivo ser o melhor provedor de acesso de banda
            larga voltado ao mercado residencial e corporativo.
          </p>

          <p className="text-[12px] font-semibold uppercase leading-relaxed tracking-wide text-gray-600 md:text-[13px]">
            A Life Connections possui e usa a melhor tecnologia hoje existente no mercado
            em fibra óptica.
          </p>

          <p className="text-[12px] font-semibold uppercase leading-relaxed tracking-wide text-gray-600 md:text-[13px]">
            Apoiada em uma capacidade única de relacionamento com o cliente, colocou-se
            rapidamente entre os líderes do mercado do litoral sul de São Paulo.
          </p>

          <p className="text-[12px] font-semibold uppercase leading-relaxed tracking-wide text-gray-600 md:text-[13px]">
            Após onze anos de presença no mercado, a empresa já ultrapassa um número
            relevante de clientes. A agilidade e a excelência no atendimento das demandas de
            um mercado cada vez mais exigente e a busca constante por superar expectativas,
            fazem da LifeConnections a escolha certa para quem precisa realmente de um
            serviço eficiente.
          </p>
        </div>

      </div>
    </section>
  );
}
