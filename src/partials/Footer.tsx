const WHATSAPP = "https://wa.me/5508003334321?text=" + encodeURIComponent("Olá, vim do site e gostaria de contratar um plano da Life Connections!");

const MENU_LINKS = [
  { label: "Home",           href: "/" },
  { label: "Planos",         href: "/#planos" },
  { label: "Sobre Nós",      href: "/#sobre" },
  { label: "Fale Conosco",   href: "/#fale-conosco" },
  { label: "Área do Cliente",href: "https://lifeconnectionsbrapp.com.br/central_assinante_web/login", external: true },
  { label: "Contrato PDF",   href: "/PDF/contrato.pdf", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Faixa superior — CTA */}
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-4 px-8 py-10 text-center md:flex-row md:justify-between md:px-16 md:text-left">
        <h2 className="text-3xl font-black uppercase leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Você merece muito mais!
        </h2>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1a5c2a] text-center text-[11px] font-black uppercase leading-tight tracking-wide text-white transition hover:bg-[#14471f] hover:scale-105 active:scale-95"
        >
          Contrate<br />Agora!
        </a>
      </div>

      {/* Divisor */}
      <hr className="mx-8 border-gray-200 md:mx-16" />

      {/* Corpo do footer */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-8 py-12 md:grid-cols-3 md:px-32">

        {/* Coluna 1 — Logo + endereço + redes */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a href="/">
            <img src="/images/Logo.png" alt="Life Connections"
              className="h-16 w-16 rounded-full object-contain transition hover:opacity-80" />
          </a>
          <div className="flex flex-col items-center gap-1 text-center text-[12px] uppercase leading-relaxed text-gray-600 md:items-start md:text-left">
            <p>Rua do Comércio, 119, Loja2<br />Centro Itariri</p>
            <p className="mt-2">Avenida São José, 75– Centro –<br />Pedro de Toledo, SP</p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="text-[22px] font-black text-gray-900 transition hover:text-[#1a5c2a]">
            0800 333 4321
          </a>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/lifeconnectionsbr/" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-[#1a5c2a]" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/lifeconnectionsbr" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-[#1a5c2a]" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2 — Menu */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-[14px] font-black uppercase tracking-widest text-gray-900">Menu</p>
          <nav className="flex flex-col items-center gap-3 md:items-start">
            {MENU_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={(item as any).external ? "_blank" : undefined}
                rel={(item as any).external ? "noopener noreferrer" : undefined}
                className="text-[13px] uppercase tracking-wide text-gray-600 transition hover:text-[#1a5c2a] hover:translate-x-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Coluna 3 — Contato */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-[14px] font-black uppercase tracking-widest text-gray-900">Contato</p>
          <div className="flex flex-col items-center gap-3 text-center text-[12px] uppercase leading-relaxed text-gray-600 md:items-start md:text-left">
            <div>
              <p className="font-semibold text-gray-700">Telefone/ WhatsApp:</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="transition hover:text-[#1a5c2a]">
                0800 333 4321
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-700">E-mail:</p>
              <a href="mailto:contato@lifeconnectionsbr.com.br"
                className="break-all transition hover:text-[#1a5c2a]">
                contato@lifeconnectionsbr.com.br
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Área do Cliente:</p>
              <a href="https://lifeconnectionsbrapp.com.br/central_assinante_web/login"
                target="_blank" rel="noopener noreferrer"
                className="transition hover:text-[#1a5c2a]">
                Acessar portal
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-2 px-8 py-4 md:flex-row md:px-16">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 max-lg:text-center">
            © 2025 Life Connections – Todos os direitos reservados
          </p>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wide text-gray-400">
            <a href="/termos" className="transition hover:text-white">Termos de Serviço</a>
            <span>|</span>
            <a href="/termos" className="transition hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
