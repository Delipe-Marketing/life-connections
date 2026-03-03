export default function Lojas() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Textos */}
        <div className="mb-8 text-center">
          <p className="mb-1 text-[13px] font-semibold uppercase tracking-widest text-gray-500">
            Nossas Lojas
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
            <span className="text-gray-900">Conheça nossos </span>
            <span className="text-[#1a7a2a]">Pontos!</span>
          </h1>
        </div>

        {/* Mapa */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7068781913913!2d-47.175707599999996!3d-24.289125499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfe1b54826760f%3A0x8b5857d65b4ce1a3!2sR.%20do%20Com%C3%A9rcio%2C%20119%20-%20Centro%2C%20Itariri%20-%20SP%2C%2011760-000!5e1!3m2!1spt-BR!2sbr!4v1772564984061!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Life Connections"
          />
        </div>

      </div>
    </section>
  );
}
