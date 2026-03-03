import { Icon } from "@iconify/react";

type Beneficio = {
  icon?: string;
  imgSrc?: string;
  label: string;
  bold?: boolean;
};

const WHATSAPP_NUMBER = "5508003334321";

function whatsappUrl(velocidade: string, unidade: string, preco: string) {
  const plano = unidade ? `${velocidade} ${unidade}` : velocidade.replace("\n", " ");
  const msg = `Olá, vim do site e tenho interesse no plano ${plano} por R$ ${preco}/mês`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

type Plano = {
  badge: string;
  velocidade: string;
  unidade: string;
  isDestaque?: boolean;
  beneficiosBase: Beneficio[];
  beneficiosExtras: Beneficio[];
  preco: string;
};

const PLANOS: Plano[] = [
  {
    badge: "100% FIBRA ÓPTICA",
    velocidade: "600",
    unidade: "mega",
    beneficiosBase: [
      { icon: "material-symbols:wifi-rounded", label: "Wi-Fi Veloz" },
      { icon: "mdi:television-play", label: "95 Canais de Tv" },
      { icon: "mdi:lightning-bolt-circle", label: "Ultravelocidade e estabilidade!", bold: true },
    ],
    beneficiosExtras: [
      { imgSrc: "/images/hbo.png", label: "HBO Max" },
      { icon: "mdi:heart-pulse", label: "LifeSaúde" },
      { icon: "mdi:television", label: "LifeTV" },
    ],
    preco: "99,90",
  },
  {
    badge: "100% FIBRA ÓPTICA",
    velocidade: "800",
    unidade: "mega",
    beneficiosBase: [
      { icon: "material-symbols:wifi-rounded", label: "Wi-Fi Veloz" },
      { icon: "mdi:television-play", label: "95 Canais de Tv" },
      { icon: "mdi:lightning-bolt-circle", label: "Ultravelocidade e estabilidade!", bold: true },
    ],
    beneficiosExtras: [
      { imgSrc: "/images/hbo.png", label: "HBO Max" },
      { icon: "mdi:heart-pulse", label: "LifeSaúde" },
      { icon: "mdi:television", label: "LifeTV" },
    ],
    preco: "139,90",
  },
  {
    badge: "100% FIBRA ÓPTICA",
    velocidade: "Sem\nLimites",
    unidade: "",
    isDestaque: true,
    beneficiosBase: [
      { icon: "material-symbols:wifi-rounded", label: "Wi-Fi Veloz" },
      { icon: "mdi:television-play", label: "95 Canais de Tv" },
      { icon: "mdi:lightning-bolt-circle", label: "Ultravelocidade e estabilidade!", bold: true },
    ],
    beneficiosExtras: [
      { imgSrc: "/images/hbo.png", label: "HBO Max" },
      { icon: "mdi:heart-pulse", label: "LifeSaúde" },
      { icon: "mdi:television", label: "LifeTV" },
    ],
    preco: "149,90",
  },
];

function BeneficioItem({ icon, imgSrc, label, bold }: Beneficio) {
  return (
    <li className="flex items-center gap-2 md:gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] overflow-hidden md:h-10 md:w-10">
        {imgSrc ? (
          <img src={imgSrc} alt={label} className="h-full w-full rounded-full object-cover" />
        ) : (
          <Icon icon={icon!} className="h-5 w-5 text-[#C0E850] md:h-6 md:w-6" />
        )}
      </span>
      <span className={`text-sm leading-snug text-gray-800 md:text-lg ${bold ? "font-bold text-[#1a7a2a]" : ""}`}>
        {label}
      </span>
    </li>
  );
}

function PlanoCard({ plano }: { plano: Plano }) {
  const isSemLimites = plano.isDestaque;

  return (
    <div className="relative border-2 border-black flex flex-col rounded-3xl bg-white shadow-2xl overflow-visible pt-7 pb-6 px-5 md:px-7 min-h-[640px]">
      {/* Badge top */}
      <div className="absolute top-3.5 max-lg:top-1.5 left-1/2 -translate-x-1/2">
        <span className="whitespace-nowrap rounded-b-xl bg-[#1a1a1a] px-5 py-3 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg md:px-8 md:py-4 md:text-lg">
          {plano.badge}
        </span>
      </div>

      {/* Velocidade */}
      <div className="mt-16 mb-1">
        <p className="text-[14px] text-gray-600">Velocidade de</p>
        {isSemLimites ? (
          <h2 className="mt-1 text-4xl font-bold leading-tight text-[#014700] md:text-5xl">
            {plano.velocidade.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        ) : (
          <p className="flex items-baseline gap-1">
            <span className="text-6xl font-bold leading-none text-[#014700] md:text-7xl">{plano.velocidade}</span>
            <span className="text-4xl font-bold text-[#014700] md:text-5xl">{plano.unidade}</span>
          </p>
        )}
      </div>

      {/* Separador */}
      <p className="mb-4 text-base font-medium text-gray-700 md:text-lg">Seu plano acompanha com:</p>

      {/* Benefícios base */}
      <ul className="mb-4 flex flex-col justify-center gap-2 md:gap-3">
        {plano.beneficiosBase.map((b) => (
          <BeneficioItem key={b.label} {...b} />
        ))}
      </ul>

      {/* Benefícios extras */}
      <ul className="mb-6 flex flex-col justify-center gap-2 md:gap-3">
        {plano.beneficiosExtras.map((b) => (
          <BeneficioItem key={b.label} {...b} />
        ))}
      </ul>

      {/* Preço */}
      <div className="mt-auto mb-4 flex items-end justify-center gap-0.5 text-[#014700]">
        <span className="text-2xl font-normal md:text-3xl">R$</span>
        <span className="text-5xl font-bold leading-none md:text-6xl">{plano.preco}</span>
        <span className="text-2xl md:text-3xl">/mês</span>
      </div>

      {/* CTA */}
      <a
        href={whatsappUrl(plano.velocidade, plano.unidade, plano.preco)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-4 rounded-full bg-[#014700] px-6 py-3 text-lg font-bold text-white transition hover:bg-[#014700]/90 active:scale-[.98]"
      >
        <Icon icon="mdi:lightning-bolt-circle" className="text-3xl text-white" />
        Contrate o melhor!
      </a>

      {/* Disclaimer */}
      <p className="mt-3 text-center text-[11px] text-gray-400">
        Consulte condições e viabilidade técnica*
      </p>
    </div>
  );
}

export default function Planos() {
  return (
    <section id="planos" className="bg-white py-20 px-4 max-lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Topo da seção */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 flex items-center max-lg:justify-center gap-2 text-lg font-medium uppercase tracking-widest text-[#1a7a2a]">
              <span className="inline-block h-[2px] w-8 bg-[#1a7a2a] max-lg:hidden" />
              Planos de Internet
            </p>
            <h1 className="text-3xl font-bold uppercase leading-tight text-gray-900 md:text-4xl max-lg:text-center">
              Planos perfeitos para<br />a sua casa inteira!
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-3 max-lg:justify-center">
            <button className="flex items-center gap-2 rounded-full border-2 border-[#1a7a2a] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#1a7a2a] transition hover:bg-[#1a7a2a] hover:text-white md:px-5 md:py-2.5 md:text-sm">
              Planos de Internet
              <Icon icon="mdi:arrow-down" className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-full border-2 border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-500 transition hover:border-[#1a7a2a] hover:text-[#1a7a2a] md:px-5 md:py-2.5 md:text-sm">
              Planos Empresariais
              <Icon icon="mdi:arrow-down" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANOS.map((plano) => (
            <PlanoCard key={plano.velocidade} plano={plano} />
          ))}
        </div>
      </div>
    </section>
  );
}
