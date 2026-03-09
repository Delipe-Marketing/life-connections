const LOJAS = [
  {
    nome: "Itariri – Centro",
    endereco: "R. do Comércio, 119 – Centro, Itariri/SP",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7068781913913!2d-47.175707599999996!3d-24.289125499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfe1b54826760f%3A0x8b5857d65b4ce1a3!2sR.%20do%20Com%C3%A9rcio%2C%20119%20-%20Centro%2C%20Itariri%20-%20SP%2C%2011760-000!5e1!3m2!1spt-BR!2sbr!4v1772564984061!5m2!1spt-BR!2sbr",
  },
  {
    nome: "Pedro de Toledo – Centro",
    endereco: "Av. São José, 75 – Centro, Pedro de Toledo/SP",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.0226702949726!2d-47.2347259763099!3d-24.277524265943594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfe3c0ace1f723%3A0x55ae84b38ec82be8!2sAv.%20S%C3%A3o%20Jos%C3%A9%2C%2075%20-%20Centro%2C%20Pedro%20de%20Toledo%20-%20SP%2C%2011790-000!5e1!3m2!1spt-BR!2sbr!4v1773061768123!5m2!1spt-BR!2sbr",
  },
];

export default function Lojas() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Textos */}
        <div className="mb-10 text-center">
          <p className="mb-1 text-[13px] font-semibold uppercase tracking-widest text-gray-500">
            Nossas Lojas
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
            <span className="text-gray-900">Conheça nossos </span>
            <span className="text-[#1a7a2a]">Pontos!</span>
          </h1>
        </div>

        {/* Mapas lado a lado */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {LOJAS.map((loja) => (
            <div key={loja.nome} className="flex flex-col gap-3">
              {/* Label da loja */}
              <div className="flex flex-col gap-0.5">
                <p className="text-[15px] font-black uppercase text-gray-900">{loja.nome}</p>
                <p className="text-[13px] text-gray-500">{loja.endereco}</p>
              </div>

              {/* Mapa */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src={loja.src}
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa – ${loja.nome}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
