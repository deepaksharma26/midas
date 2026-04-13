import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import slider1 from '../../assets/img/slider/hero-section-1.png';
import slider2 from '../../assets/img/slider/hero-section-2.png';
const swiperConfig = {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
};

const ImageSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.init-swiper', swiperConfig);
    return () => swiper.destroy();
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-start">
          <div className="col-lg-5">
            <div className="hero-content" data-aos="fade-right" data-aos-delay="200">
              <span className="subtitle">The Ultimate In Brilliance ✨</span>
              <h1>Premium Manufacturers of Glitter, Sequins & Metallised Films</h1>
              <p>Pioneers in metallic yarn since 1978 and first to introduce Glitter Powder in India in 1980 with
                Japanese technology. Serving major global retailers including Walmart, Michaels, and Hobby Lobby.</p>
              <div className="hero-buttons">
                <a href="/products" className="btn-primary">Explore Products</a>
                <a href="/contact" className="btn-secondary">Request a Quote</a>
              </div>
              <div className="trust-badges">
                <div className="badge-item">
                  <i className="bi bi-calendar-check"></i>
                  <div className="badge-text">
                    <span className="count">45+</span>
                    <span className="label">Years of Legacy</span>
                  </div>
                </div>
                <div className="badge-item">
                  <i className="bi bi-globe-americas"></i>
                  <div className="badge-text">
                    <span className="count">10</span>
                    <span className="label">Export Countries</span>
                  </div>
                </div>
                <div className="badge-item">
                  <i className="bi bi-box-seam"></i>
                  <div className="badge-text">
                    <span className="count">3,730</span>
                    <span className="label">MT/Year Capacity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="hero-image-slider swiper init-swiper"
              style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src={slider1} className="img-fluid" alt="Midas Glitter Profile"
                    style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div className="swiper-slide">
                  <img src={slider2} className="img-fluid" alt="Premium Gold Glitter"
                    style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;