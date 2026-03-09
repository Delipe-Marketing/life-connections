import { useState } from "react";
import { Icon } from "@iconify/react";

const WHATSAPP =
  "https://wa.me/5508003334321?text=" +
  encodeURIComponent(
    "Olá, vim do site e gostaria de contratar um plano da Life Connections!",
  );

const NAV_LINKS = [
  { label: "INICIO", href: "/", external: false },
  { label: "PLANOS DE INTERNET", href: "/#planos", external: false },
  { label: "SOBRE NÓS", href: "/#sobre", external: false },
  { label: "FALE CONOSCO", href: "/#fale-conosco", external: false },
  {
    label: "ÁREA DO CLIENTE",
    href: "https://lifeconnectionsbrapp.com.br/central_assinante_web/login",
    external: true,
  },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-10 w-full px-4 py-4">
      {/* WhatsApp Flutuante */}
      <a
        href="https://api.whatsapp.com/send/?phone=5508003334321&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+contratar+um+plano+da+Life+Connections%21&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg z-[9999] animate-bounce"
      >
        <img
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          className="w-10 h-10 invert"
        />
      </a>
      <div className="mx-auto flex max-w-7xl flex-col gap-3">
        {/* Top bar — oculta no mobile */}
        <div className="hidden md:flex items-center justify-between rounded-full bg-white/10 px-16 py-3 shadow-xl backdrop-blur-md">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/90 transition hover:text-[#C0E850]"
          >
            <Icon
              icon="mdi:whatsapp"
              className="h-6 w-6 shrink-0 text-[#C0E850]"
            />
            <span className="text-[15px] font-normal tracking-wide">
              0800 333 4321
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/lifeconnectionsbr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-[#C0E850]"
              aria-label="Instagram"
            >
              <Icon icon="mdi:instagram" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/lifeconnectionsbr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-[#C0E850]"
              aria-label="Facebook"
            >
              <Icon icon="mdi:facebook" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between rounded-full bg-white/10 px-5 py-3 shadow-xl backdrop-blur-md md:gap-8 md:px-16 md:py-4">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <img
              src="/images/Logo.png"
              alt="Life Connections"
              className="h-11 w-11 rounded-full object-contain md:h-14 md:w-14"
            />
          </a>

          {/* Nav — só desktop */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[15px] font-normal tracking-wide text-white transition hover:text-[#C0E850]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — só desktop */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block shrink-0 rounded-full bg-white px-6 py-3 font-bold uppercase tracking-wide text-[#30753B] transition hover:bg-[#C0E850] hover:text-[#014700] active:scale-95"
          >
            QUERO CONTRATAR!
          </a>

          {/* Hamburguer — só mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="flex md:hidden items-center justify-center rounded-full text-black p-2 transition"
            aria-label="Abrir menu"
          >
            <Icon
              icon={menuAberto ? "mdi:close" : "mdi:menu"}
              className="h-7 w-7"
            />
          </button>
        </div>

        {/* Dropdown mobile */}
        {menuAberto && (
          <div className="flex flex-col gap-1 rounded-2xl bg-black/90 px-5 py-5 shadow-2xl backdrop-blur-md md:hidden">
            {/* WhatsApp + redes */}
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 transition hover:text-[#C0E850]"
              >
                <Icon icon="mdi:whatsapp" className="h-5 w-5 text-[#C0E850]" />
                <span className="text-[13px]">0800 333 4321</span>
              </a>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/lifeconnectionsbr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-[#C0E850]"
                >
                  <Icon icon="mdi:instagram" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/lifeconnectionsbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-[#C0E850]"
                >
                  <Icon icon="mdi:facebook" className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuAberto(false)}
                className="rounded-xl px-4 py-3 text-[14px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 hover:text-[#C0E850]"
              >
                {link.label}
              </a>
            ))}

            {/* PDF */}
            <a
              href="/PDF/contrato.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuAberto(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-[14px] font-semibold uppercase tracking-wide text-white/70 transition hover:bg-white/10 hover:text-[#C0E850]"
            >
              <Icon icon="mdi:file-pdf-box" className="h-5 w-5" />
              Contrato PDF
            </a>

            {/* CTA mobile */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-white py-3 text-center font-bold uppercase tracking-wide text-[#30753B] transition hover:bg-[#C0E850] hover:text-[#014700] active:scale-95"
            >
              QUERO CONTRATAR!
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
