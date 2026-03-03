import { useState } from "react";
import { Icon } from "@iconify/react";

type Status = "idle" | "loading" | "success" | "error";

const AREAS = [
  "Plano Residencial 600 Mega",
  "Plano Residencial 800 Mega",
  "Plano Sem Limites",
  "Plano Empresarial",
  "Suporte Técnico",
  "Outros",
];

export default function FaleConosco() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    area: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function formatTelefone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function handleTelefone(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, telefone: formatTelefone(e.target.value) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/data.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ nome: "", email: "", telefone: "", endereco: "", area: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[14px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#1a7a2a] focus:bg-white focus:ring-2 focus:ring-[#1a7a2a]/20";

  return (
    <section id="fale-conosco" className="bg-[#f9fafb] py-16 px-8 md:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Cabeçalho */}
        <div className="mb-10 flex flex-col gap-1">
          <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-widest text-[#1a7a2a]">
            <span className="inline-block h-[2px] w-8 bg-[#1a7a2a]" />
            Entre em Contato
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight text-gray-900 md:text-4xl">
            Fale <span className="text-[#1a7a2a]">Conosco</span>
          </h2>
          <p className="mt-1 text-[14px] text-gray-500 max-w-lg">
            Preencha o formulário abaixo e nossa equipe entrará em contato o mais rápido possível.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                Nome completo *
              </label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className={inputClass}
              />
            </div>

            {/* Email + Telefone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleTelefone}
                  placeholder="(13) 99999-9999"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                Endereço
              </label>
              <input
                type="text"
                name="endereco"
                value={form.endereco}
                onChange={handleChange}
                placeholder="Rua, número, bairro, cidade"
                className={inputClass}
              />
            </div>

            {/* Área de interesse */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                Área de interesse *
              </label>
              <select
                name="area"
                value={form.area}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>Selecione uma opção</option>
                {AREAS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Feedback de status */}
            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-[13px] font-semibold text-green-700">
                <Icon icon="mdi:check-circle" className="h-5 w-5 shrink-0" />
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[13px] font-semibold text-red-700">
                <Icon icon="mdi:alert-circle" className="h-5 w-5 shrink-0" />
                Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
              </div>
            )}

            {/* Botão */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#1a7a2a] px-8 py-4 text-[14px] font-black uppercase tracking-wide text-white transition hover:bg-[#155f20] active:scale-[.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Icon icon="mdi:loading" className="h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Icon icon="mdi:send" className="h-5 w-5" />
                  Enviar mensagem
                </>
              )}
            </button>
          </form>

          {/* Info de contato */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-6">

              <a href="https://wa.me/5508003334321" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#1a7a2a] hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a7a2a]">
                  <Icon icon="mdi:whatsapp" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">WhatsApp / Telefone</p>
                  <p className="text-[16px] font-black text-gray-900 group-hover:text-[#1a7a2a] transition">0800 333 4321</p>
                </div>
              </a>

              <a href="mailto:contato@lifeconnectionsbr.com.br"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#1a7a2a] hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a7a2a]">
                  <Icon icon="mdi:email-outline" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">E-mail</p>
                  <p className="text-[15px] font-bold text-gray-900 group-hover:text-[#1a7a2a] transition break-all">
                    contato@lifeconnectionsbr.com.br
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a7a2a]">
                  <Icon icon="mdi:map-marker" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-gray-400">Endereços</p>
                  <p className="text-[14px] font-semibold text-gray-700 leading-relaxed">
                    Rua do Comércio, 119 – Centro, Itariri<br />
                    Av. São José, 75 – Centro, Pedro de Toledo/SP
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
