import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VANTAGENS = [
  "/images/papel1.png",
  "/images/papel2.png",
  "/images/papel3.png",
  "/images/papel4.png",
  "/images/papel5.png",
  "/images/papel6.png",
];

export default function Vantagens() {
  return (
    <section className="py-8 px-6 md:px-24">
      <img src="/banners/Banner.png" alt="Banner" className="mx-auto w-full" />

      <div className="mt-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
          className="pb-10"
        >
          {VANTAGENS.map((src) => (
            <SwiperSlide key={src}>
              <img src={src} alt="Vantagem" className="w-8/10 mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
