import { useState } from "react";

type Item = {
  pergunta: string;
  resposta: string;
};

const COLUNA_ESQUERDA: Item[] = [
  {
    pergunta: "Como funciona o suporte técnico da Life?",
    resposta:
      "Nosso suporte é diferenciado, com atendimento com prioridade para clientes empresariais, garantindo resolução rápida e eficiente de qualquer problema.",
  },
  {
    pergunta: "Por que contratar a Life?",
    resposta:
      "A Life Connections oferece a melhor tecnologia em fibra óptica, atendimento ágil e planos personalizados para atender as necessidades da sua casa ou empresa.",
  },
  {
    pergunta: "A Life atende empresas de qualquer porte?",
    resposta:
      "Sim! Atendemos desde microempresas até grandes corporações, com planos dedicados e suporte especializado para cada perfil de negócio.",
  },
];

const COLUNA_DIREITA: Item[] = [
  {
    pergunta: "É possível personalizar os planos de internet para empresa?",
    resposta:
      "Sim, oferecemos planos corporativos flexíveis que podem ser adaptados à demanda e ao porte da sua empresa, garantindo a melhor custo-benefício.",
  },
  {
    pergunta: "Como faço para contratar os serviços da Life?",
    resposta:
      "Basta entrar em contato pelo WhatsApp, telefone ou acessar nossa área de contratação no site. Nossa equipe irá orientá-lo em cada etapa.",
  },
  {
    pergunta: "A Life oferece internet dedicada?",
    resposta:
      "Sim! Temos planos com link dedicado para empresas que precisam de máxima estabilidade e desempenho, sem oscilações na conexão.",
  },
];

function FAQItem({ pergunta, resposta }: Item) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setAberto(!aberto)}
        className={`w-full rounded-full px-6 py-4 text-left text-[12px] font-bold uppercase tracking-wide transition-colors ${
          aberto
            ? "bg-[#1a5c2a] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {pergunta}
      </button>

      {aberto && (
        <p className="px-6 py-2 text-[12px] font-semibold uppercase leading-relaxed tracking-wide text-gray-600">
          {resposta}
        </p>
      )}
    </div>
  );
}

function Coluna({ itens }: { itens: Item[] }) {
  return (
    <div className="flex flex-1 flex-col gap-3">
      {itens.map((item) => (
        <FAQItem key={item.pergunta} {...item} />
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Cabeçalho */}
        <div className="mb-10 text-center">
          <p className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-gray-400">
            Tem alguma pergunta?
          </p>
          <h2 className="text-4xl font-black uppercase text-gray-900 md:text-5xl">
            Dúvidas Frequentes
          </h2>
        </div>

        {/* Duas colunas */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <Coluna itens={COLUNA_ESQUERDA} />
          <Coluna itens={COLUNA_DIREITA} />
        </div>

      </div>
    </section>
  );
}
