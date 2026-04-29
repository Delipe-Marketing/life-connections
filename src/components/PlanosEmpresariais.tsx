import { Icon } from "@iconify/react";

const WHATSAPP_NUMBER = "5508003334321";

const BENEFICIOS = [
  { icon: "material-symbols:wifi-rounded",  label: "Internet Ilimitada" },
  { icon: "mdi:router-wireless",            label: "2 Pontos de Wi-Fi" },
  { icon: "mdi:headset",                    label: "Atendimento Expresso" },
  { icon: "mdi:message-badge-outline",      label: "Canal de comunicação personalizado" },
  { icon: "mdi:television",                 label: "LifeTV" },
];

function whatsappPersonalizar() {
  const msg = "Olá, vim do site e gostaria de personalizar um plano empresarial da Life Connections!";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function whatsappContratar() {
  const msg = "Olá, vim do site e tenho interesse no plano Life Empresa por R$ 239,70/mês";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function PlanosEmpresariais() {
  return (
    <div className="pt-6 flex flex-col items-center">
      <div className="relative border-2 border-black flex flex-col rounded-3xl bg-white shadow-2xl overflow-visible pt-7 pb-6 px-7 w-full max-w-sm">

        {/* Badge top */}
        <div className="absolute top-2.5 max-lg:top-2.5 left-1/2 -translate-x-1/2">
          <span className="whitespace-nowrap rounded-b-xl bg-[#014700] px-8 py-3 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg md:text-base">
            PLANO EMPRESARIAL
          </span>
        </div>

        {/* Nome do plano */}
        <div className="mt-16 mb-4">
          <img
            src="/images/lifeempresaIcon.png"
            alt="Life Empresas"
            className="h-36 w-auto object-contain"
          />
        </div>

        {/* Separador */}
        <p className="mb-4 text-base font-medium text-gray-700">Seu plano inclui:</p>

        {/* Benefícios */}
        <ul className="mb-8 flex flex-col gap-3">
          {BENEFICIOS.map((b) => (
            <li key={b.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] overflow-hidden">
                <Icon icon={b.icon} className="h-6 w-6 text-[#C0E850]" />
              </span>
              <span className="text-base leading-snug text-gray-800">{b.label}</span>
            </li>
          ))}
        </ul>

        {/* Preço */}
        <div className="mt-auto mb-6 flex items-end justify-center gap-0.5 text-[#014700]">
          <span className="text-2xl font-normal md:text-3xl">R$</span>
          <span className="text-5xl font-bold leading-none md:text-6xl">239,70</span>
          <span className="text-2xl md:text-3xl">/mês</span>
        </div>

        {/* CTA — Contratar */}
        <a
          href={whatsappContratar()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full bg-[#014700] px-6 py-3 text-base font-bold text-white transition hover:bg-[#014700]/90 active:scale-[.98]"
        >
          <Icon icon="mdi:lightning-bolt-circle" className="text-2xl text-white" />
          Contrate o melhor!
        </a>

        {/* CTA — Personalizar */}
        <a
          href={whatsappPersonalizar()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-[#014700] px-6 py-3 text-sm font-bold text-[#014700] transition hover:bg-[#014700] hover:text-white active:scale-[.98]"
        >
          <Icon icon="mdi:tune-variant" className="text-xl" />
          Personalize seu plano
        </a>

        {/* Disclaimer */}
        <p className="mt-3 text-center text-[11px] text-gray-400">
          Consulte condições e viabilidade técnica*
        </p>
      </div>

      {/* Texto de apoio */}
      <p className="mt-8 max-w-md text-center text-[14px] text-gray-500 leading-relaxed">
        Precisa de algo diferente? Fale com nossa equipe e monte o plano ideal para o seu negócio.
      </p>
    </div>
  );
}
