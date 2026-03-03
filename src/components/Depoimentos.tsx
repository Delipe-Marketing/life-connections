const DEPOIMENTOS = [
  {
    nome: "Carlos Henrique",
    estrelas: 5,
    texto:
      "A internet da Life Connections mudou minha rotina em casa. Velocidade estável o dia todo, sem quedas. Recomendo demais para quem precisa de qualidade de verdade.",
  },
  {
    nome: "Fernanda Oliveira",
    estrelas: 5,
    texto:
      "Atendimento super rápido e eficiente. Técnico chegou no horário marcado e resolveu tudo em minutos. Melhor provedor que já contratei na minha vida.",
  },
  {
    nome: "Rafael Souza",
    estrelas: 5,
    texto:
      "Uso a fibra da Life Connections há dois anos e nunca tive problemas. Velocidade sempre acima do contratado. Suporte sempre disponível quando preciso.",
  },
  {
    nome: "Juliana Martins",
    estrelas: 5,
    texto:
      "Excelente serviço! Minha família inteira usa ao mesmo tempo e nunca trava. Preço justo pelo que entrega. Com certeza vou renovar o contrato.",
  },
];

function Estrelas({ quantidade }: { quantidade: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: quantidade }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.356 2.701c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.653 9.394c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

function CardDepoimento({ nome, estrelas, texto }: (typeof DEPOIMENTOS)[number]) {
  return (
    <div className="flex flex-col w-full justify-between rounded-2xl bg-[#dff0df] p-4 gap-3 md:w-80 md:p-5 md:gap-4">
      {/* Texto do depoimento */}
      <p className="text-[12px] font-semibold uppercase leading-relaxed tracking-wide text-gray-600">
        {texto}
      </p>

      {/* Rodapé: avatar + nome + estrelas + aspas */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="h-10 w-10 shrink-0 rounded-full bg-[#c5b8d8]" />
          <div className="flex flex-col leading-tight">
            <span className="text-[14px] font-bold text-gray-800">{nome}</span>
            <div className="flex items-center gap-1">
              <Estrelas quantidade={estrelas} />
              <span className="text-[11px] text-gray-500">{estrelas} estrelas</span>
            </div>
          </div>
        </div>
        {/* Aspas decorativas */}
        <svg className="h-10 w-10 shrink-0 text-[#1a7a2a] opacity-60" fill="currentColor" viewBox="0 0 32 24">
          <path d="M0 24V15.6C0 11.2 1.06667 7.6 3.2 4.8C5.33333 2 7.73333 .533333 11.2 0L12.8 2.4C10.4 2.8 8.4 3.8 6.8 5.4C5.2 7 4.4 8.8 4.4 10.8H10V24H0ZM18 24V15.6C18 11.2 19.0667 7.6 21.2 4.8C23.3333 2 25.7333 .533333 29.2 0L30.8 2.4C28.4 2.8 26.4 3.8 24.8 5.4C23.2 7 22.4 8.8 22.4 10.8H28V24H18Z" />
        </svg>
      </div>
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className=" py-16 px-8 md:px-16">
      <div className="mx-auto max-w-6xl flex flex-col gap-8 md:flex-row md:gap-32 md:items-center">

        {/* Lado esquerdo — título e avaliação */}
        <div className="flex-shrink-0 flex flex-row items-center gap-6 md:flex-col md:items-start md:w-[260px]">
          <h2 className="text-xl font-black uppercase leading-tight text-[#161616] md:text-3xl lg:text-4xl">
            Você sabe o porque a{" "}
            <span className="font-bold">Life Connections</span>{" "}
            é a mais bem avaliada?
          </h2>

          <div className="flex flex-col items-center md:items-start shrink-0">
            <p className="text-7xl font-black leading-none text-[#014700] md:mt-8 md:text-9xl">
              4,7
            </p>
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.356 2.701c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.653 9.394c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Lado direito — grid 2x2 de depoimentos */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {DEPOIMENTOS.map((d) => (
            <CardDepoimento key={d.nome} {...d} />
          ))}
        </div>

      </div>
    </section>
  );
}
