const VANTAGENS = [
  "/images/papel1.png",
  "/images/papel2.png",
  "/images/papel3.png",
  "/images/papel4.png",
];

export default function Vantagens() {
  return (
    <section className="py-8 px-6 md:px-24">
      <img src="/banners/Banner.png" alt="Banner" className="mx-auto w-full" />

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {VANTAGENS.map((src) => (
          <img key={src} src={src} alt="Vantagem" className="w-full mx-auto" />
        ))}
      </div>
    </section>
  );
}
