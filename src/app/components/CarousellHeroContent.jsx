import { useEffect, useRef } from "react";
import Link from "next/link";

export default function MovieCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (carousel) {
          carousel.scrollLeft += 1; // Scroll horizontal
          if (
            carousel.scrollLeft + carousel.offsetWidth >=
            carousel.scrollWidth
          ) {
            carousel.scrollLeft = 0; // Reset scroll
          }
        }
      }, 20); // Kecepatan scroll (ms)
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <section className="konten">
      <div
        className="carousel flex overflow-x-scroll scrollbar-hide"
        ref={carouselRef}
      >
        <div className="flex-shrink-0">
          <Link href="/pages/movie-page">
            <section className="hero">
              <div className="hero-content">
                <h2>Monkey Heist</h2>
                <p>110 Menit</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                </p>
              </div>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Monkey Heist"
              />
            </section>
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Link href="/pages/movie-page">
            <section className="hero">
              <div className="hero-content">
                <h2>Monkey Heist</h2>
                <p>110 Menit</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                </p>
              </div>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Monkey Heist"
              />
            </section>
          </Link>
        </div>
        
        <div className="flex-shrink-0">
          <Link href="/pages/movie-page">
            <section className="hero">
              <div className="hero-content">
                <h2>Monkey Heist</h2>
                <p>110 Menit</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                </p>
              </div>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Monkey Heist"
              />
            </section>
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Link href="/pages/movie-page">
            <section className="hero">
              <div className="hero-content">
                <h2>Monkey Heist</h2>
                <p>110 Menit</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                </p>
              </div>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Monkey Heist"
              />
            </section>
          </Link>
        </div>

        {/* Tambahkan elemen tambahan di sini */}
      </div>
    </section>
  );
}
