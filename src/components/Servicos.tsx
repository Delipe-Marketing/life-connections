export default function Servicos() {

  const services = [
    {
      card: "/images/lifetv.png",
      text: "Os melhores canais para a sua família aproveitar"
    },
    {
      card: "/images/lifesaude.png",
      text: "Consultas médicas online 24 horas\nna palma da mão."
    },
    {
      card: "/images/lifecam.png",
      text: "Monitoramento 24 horas na\npalma da sua mão."
    },
    {
      card: "/images/hboCard.png",
      text: "Um dos maiores serviços de\nstreaming do mundo incluído\nno seu plano."
    },

  ]

  return (
    <section className="py-16 px-16">
      <div className="mx-auto max-w-6xl">
        <h1 className=" text-4xl max-lg:text-center font-bold leading-tight text-black md:text-5xl">
          Os melhores serviços<br />para você e por você!
        </h1>
      </div>

      <div className="flex flex-row max-lg:flex-col pt-6 px-6 items-center justify-center">
        {services.map((service) => (
          <div
            key={service.text}
            className={`relative flex flex-col ${
              service === services[services.length - 1] ? "w-90" : "w-85"
            }`}
          >
            <img src={service.card} alt={service.text} className="w-full " />

            <p className="text-xs font-bold leading-tight text-black absolute bottom-2/7 left-1/2 -translate-x-1/2 text-center text-white">{service.text}</p>

            <a href={`https://wa.me/5508003334321?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20tenho%20interesse%20no%20plano%20${service.text}`} className="text-sm font-bold leading-tight text-black absolute bottom-1/8 bg-white px-8 py-3 left-1/2 -translate-x-1/2 text-center text-[#014700] rounded-full hover:scale-105 transition-all duration-300">Saber mais</a>
          </div>
        ))}
      </div>
    </section>
  );
}