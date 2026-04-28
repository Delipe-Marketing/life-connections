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
  preco: string;
};

const PLANOS: Plano[] = [
  {
    badge: "100% FIBRA ÓPTICA",
    velocidade: "600",
    unidade: "mega",
    beneficiosBase: [
      { icon: "mdi:check-circle", label: "Instalação grátis" },
      { icon: "material-symbols:wifi-rounded", label: "Wi-Fi Veloz" },
      { icon: "mdi:headset", label: "Assistência Pro" },
    ],
    preco: "99,90",
  },
  {
    badge: "100% FIBRA ÓPTICA",
    velocidade: "800",
    unidade: "mega",
    beneficiosBase: [
      { icon: "mdi:check-circle", label: "Instalação grátis" },
      { icon: "material-symbols:wifi-rounded", label: "Wi-Fi Veloz" },
      { icon: "mdi:headset", label: "Assistência Pro" },
    ],
    preco: "139,90",
  },
  {
    badge: "100% FIBRA ÓPTICA",
    velocidade: "Sem\nLimites",
    unidade: "",
    isDestaque: true,
    beneficiosBase: [
      { icon: "mdi:check-circle", label: "Instalação grátis" },
      { icon: "material-symbols:wifi-rounded", label: "Wi-Fi Veloz" },
      { icon: "mdi:headset", label: "Assistência Pro" },
    ],
    preco: "149,90",
  },
];

function turbineWhatsapp(servico: string) {
  const msg = `Olá, vim do site e gostaria de adicionar o ${servico} ao meu plano residencial!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const TURBINE_PLANO: (Beneficio & { href: string })[] = [
  { imgSrc: "/images/lifesaudeIcon.png", label: "Life Saúde", href: turbineWhatsapp("Life Saúde") },
  { imgSrc: "/images/lifetvIcon.png", label: "LifeTV", href: turbineWhatsapp("LifeTV") },
  { imgSrc: "/images/hbo.png", label: "HBO Max", href: turbineWhatsapp("HBO Max") },
  { imgSrc: "/images/lifecamIcon.png", label: "Life CAM", href: turbineWhatsapp("Life CAM") },
  { imgSrc: "/images/lifefoneIcon.png", label: "Life Fone", href: turbineWhatsapp("Life Fone") },
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
      <div className="absolute top-3 max-lg:top-2.5 left-1/2 -translate-x-1/2">
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

      {/* Benefícios */}
      <ul className="mb-4 flex flex-col justify-center gap-2 md:gap-3">
        {plano.beneficiosBase.map((b) => (
          <BeneficioItem key={b.label} {...b} />
        ))}
      </ul>

      {/* Turbine seu plano */}
      <div className="mb-6 rounded-xl bg-[#f0f9f0] border border-[#1a7a2a]/20 px-4 py-4">
        <p className="mb-3 text-center text-[12px] font-black uppercase tracking-wide text-[#014700]">
          Turbine seu plano
        </p>
        <div className="grid grid-cols-2 gap-3 place-items-center">
          {TURBINE_PLANO.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 transition hover:scale-105 hover:opacity-90"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden md:h-12 md:w-12">
                {item.imgSrc ? (
                  <img src={item.imgSrc} alt={item.label} className="h-full w-full rounded-full object-cover" />
                ) : (
                  <Icon icon={item.icon!} className="h-5 w-5 text-[#1a7a2a] md:h-6 md:w-6" />
                )}
              </span>
              <span className="text-[10px] font-bold text-gray-700 md:text-[11px]">{item.label}</span>
            </a>
          ))}
          <a
            href={TURBINE_PLANO[4].href}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex flex-col items-center gap-1 transition hover:scale-105 hover:opacity-90"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden md:h-12 md:w-12">
              {TURBINE_PLANO[4].imgSrc ? (
                <img src={TURBINE_PLANO[4].imgSrc} alt={TURBINE_PLANO[4].label} className="h-full w-full rounded-full object-cover" />
              ) : (
                <Icon icon={TURBINE_PLANO[4].icon!} className="h-5 w-5 text-[#1a7a2a] md:h-6 md:w-6" />
              )}
            </span>
            <span className="text-[10px] font-bold text-gray-700 md:text-[11px]">{TURBINE_PLANO[4].label}</span>
          </a>
        </div>
      </div>

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
        <Icon icon="mdi:lightning-bolt-circle" className="text-3xl max-lg:text-xl text-white" />
        Contrate o melhor!
      </a>

      {/* Disclaimer */}
      <p className="mt-3 text-center text-[11px] text-gray-400">
        Consulte condições e viabilidade técnica*
      </p>
    </div>
  );
}

export default function PlanosResidenciais() {
  return (
    <div className="grid grid-cols-1 gap-10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
      {PLANOS.map((plano) => (
        <PlanoCard key={plano.velocidade} plano={plano} />
      ))}
    </div>
  );
}
