const ITENS = [
  {
    titulo: "Missão",
    texto:
      "Entregar o melhor sinal de internet com qualidade e velocidade de navegação a todos nossos clientes, garantindo sua satisfação, com crescimento dia a dia.",
  },
  {
    titulo: "Visão",
    texto:
      "– Satisfação de nossos clientes;\n– Atuar com clareza e transparência;\n– Comunicação clara e efetiva com nossos colaboradores e clientes.",
  },
  {
    titulo: "Valores",
    texto:
      "Ser o melhor provedor de internet, reconhecido como referência em desempenho e atendimento.",
  },
];

export default function Valores() {
  return (
    <section className="bg-white py-14 px-8 md:px-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
        {ITENS.map((item) => (
          <div
            key={item.titulo}
            className="flex flex-col justify-between rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            {/* Aspas decorativas */}
            <div className="mb-4">
              <img src="/images/aspas.png" alt="Aspas" className="w-10" />
            </div>

            {/* Texto */}
            <p className="flex-1 text-[13px] font-semibold uppercase leading-relaxed tracking-wide text-gray-600 whitespace-pre-line">
              {item.texto}
            </p>

            <div className="h-0.5 w-full bg-[#014700] my-4 opacity-20" />

            {/* Título */}
            <p className="mt-1 text-[18px] font-black uppercase tracking-wide text-[#014700]">
              {item.titulo}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
