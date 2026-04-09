import React from 'react';
import './HeroSection.css';
import one from '../assets/img/33.png';
import two from '../assets/img/Polyester-Glitter-Powder-for-Decorations-And-Events-thumb.jpg';
import { ImageLinks } from '../static/constants/Image';
const HeroSection = () => {
  return (
    <>
      <section id="about" class="about section">

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <div class="about-content" data-aos="fade-right" data-aos-delay="200">
                <h2>Pioneers of Glitter Industry Since 1974</h2>
                <p class="lead">We are pioneers in manufacturing metallic yarn since 1974 and introduced Glitter Powder in
                  India in 1980 with <strong>Japanese technology and equipment</strong>.</p>
                <p>Our modern manufacturing facility spans <strong>50,000 square feet</strong> with a combined installed
                  capacity of <strong>300 tons per month</strong>. We produce lacquer coated polyester film, glitter
                  powder, and viscose flock powder in conformance with international standards.</p>

                <div class="achievement-boxes row g-4 mt-4">
                  <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
                    <div class="achievement-box">
                      <h3>50K</h3>
                      <p>Sq Ft Facility</p>
                    </div>
                  </div>
                  <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="400">
                    <div class="achievement-box">
                      <h3>300</h3>
                      <p>Tons/Month Capacity</p>
                    </div>
                  </div>
                  <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="500">
                    <div class="achievement-box">
                      <h3>50+</h3>
                      <p>Years of Legacy</p>
                    </div>
                  </div>
                  <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="600">
                    <div class="achievement-box">
                      <h3>10</h3>
                      <p>Export Countries</p>
                    </div>
                  </div>
                </div>

                <div class="certifications mt-5" data-aos="fade-up" data-aos-delay="700">
                  <h5>Certifications & Compliance</h5>
                  <div class="row g-3 align-items-center">
                    <div class="col-auto">
                      <span class="badge bg-success fs-6 p-2">SGS SMETA Audit ✓</span>
                    </div>
                    <div class="col-auto">
                      <span class="badge bg-primary fs-6 p-2">CTPAT (In Progress)</span>
                    </div>
                    <div class="col-auto">
                      <span class="badge bg-primary fs-6 p-2">FCCA (In Progress)</span>
                    </div>
                    <div class="col-auto">
                      <span class="badge bg-warning text-dark fs-6 p-2">Formaldehyde Free</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-image position-relative" data-aos="fade-left" data-aos-delay="200">
                <img src={one} alt="Glitter Manufacturing Facility"
                  class="img-fluid main-image rounded" />
                <div class="image-overlay">
                  <img src={two} alt="Midas Glitter Products" class="img-fluid rounded" />
                </div>
                <div class="experience-badge" data-aos="zoom-in" data-aos-delay="500">
                  <span>45+</span>
                  <p>Years of Legacy</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section id="capacity" class="stats section">


        <div class="container section-title" data-aos="fade-up">
          <h2>Production Capacity</h2>
          <p>Modern infrastructure delivering 3,730+ metric tons annually</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 text-center">

            <div class="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="stats-item p-4 rounded" style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d2d44)' }}>
                <i class="bi bi-film text-white fs-1 mb-3"></i>
                <h3 class="text-white mb-2">2,400</h3>
                <p class="text-white-50 mb-0">MT Coated Films</p>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="200">
              <div class="stats-item p-4 rounded" style={{ background: 'linear-gradient(135deg, #D4AF37, #B8941F)' }}>
                <i class="bi bi-stars text-white fs-1 mb-3"></i>
                <h3 class="text-white mb-2">780</h3>
                <p class="text-white-50 mb-0">MT Glitter Powder</p>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="stats-item p-4 rounded" style={{ background: 'linear-gradient(135deg, #553C9A, #6B4CAA)' }}>
                <i class="bi bi-droplet-half text-white fs-1 mb-3"></i>
                <h3 class="text-white mb-2">200</h3>
                <p class="text-white-50 mb-0">MT Glitter Glue</p>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="400">
              <div class="stats-item p-4 rounded" style={{ background: 'linear-gradient(135deg, #C41E8C, #DA2E9C)' }}>
                <i class="bi bi-hexagon text-white fs-1 mb-3"></i>
                <h3 class="text-white mb-2">150</h3>
                <p class="text-white-50 mb-0">MT Sequins</p>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="500">
              <div class="stats-item p-4 rounded" style={{ background: 'linear-gradient(135deg, #28a745, #218838)' }}>
                <i class="bi bi-balloon-heart text-white fs-1 mb-3"></i>
                <h3 class="text-white mb-2">200</h3>
                <p class="text-white-50 mb-0">MT Confetti</p>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="600">
              <div class="stats-item p-4 rounded"
                style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d2d44)', border: '2px solid #D4AF37' }}>
                <i class="bi bi-trophy text-warning fs-1 mb-3"></i>
                <h3 style={{ color: '#D4AF37' }} class="mb-2">3,730</h3>
                <p class="text-white-50 mb-0">Total MT/Year</p>
              </div>
            </div>

          </div>

          <div class="row mt-5 justify-content-center">
            <div class="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="300">
              <h4 class="mb-3">Manufacturing Infrastructure</h4>
              <div class="d-flex flex-wrap justify-content-center gap-3">
                <span class="badge rounded-pill bg-light text-dark p-3 fs-6">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>Color Coating Machines
                </span>
                <span class="badge rounded-pill bg-light text-dark p-3 fs-6">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>Lamination Lines
                </span>
                <span class="badge rounded-pill bg-light text-dark p-3 fs-6">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>PET Bottle Blowing
                </span>
                <span class="badge rounded-pill bg-light text-dark p-3 fs-6">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>Injection Moulding
                </span>
                <span class="badge rounded-pill bg-light text-dark p-3 fs-6">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>Mixing & Filling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" class="awards section dark-background">


        <div class="container section-title" data-aos="fade-up">
          <h2>Awards & Recognition</h2>
          <p>Recognized for excellence in manufacturing and entrepreneurship</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 justify-content-center">

            <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="award-card text-center p-4 rounded bg-white shadow-sm">
                <div class="award-icon mb-3">
                  <i class="bi bi-trophy-fill" style={{ fontSize: '3rem', color: '#D4AF37' }}></i>
                </div>
                <img src={ImageLinks.award} alt="SME Award" class="img-fluid mb-3" style={{ maxWidth: '100%', height: 'auto' }} />
                <h4>Best Entrepreneur</h4>
                <span class="award-year badge bg-dark mb-3">July 2017</span>
                <p class="text-muted">Managing Director honoured with "Best Entrepreneur" award by Franchisee India.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div class="award-card text-center p-4 rounded bg-white shadow-sm">
                <div class="award-icon mb-3">
                  <i class="bi bi-award-fill" style={{ fontSize: '3rem', color: '#553C9A' }}></i>
                </div>
                <img src={ImageLinks.sme} alt="SME Award" class="img-fluid mb-3" style={{ maxWidth: '100%', height: 'auto' }} />
                <h4>D&B SME Excellence</h4>
                <span class="award-year badge bg-dark mb-3">November 2017</span>
                <p class="text-muted">Dun & Bradstreet - RBL Bank SME Business Excellence Award in Textiles sector.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="award-card text-center p-4 rounded bg-white shadow-sm">
                <div class="award-icon mb-3">
                  <i class="bi bi-star-fill" style={{ fontSize: '3rem', color: '#C41E8C' }}></i>
                </div>
                <img src={ImageLinks.smebest} alt="SME Award" class="img-fluid mb-3" style={{ maxWidth: '100%', height: 'auto' }} />

                <h4>India SME 100</h4>
                <span class="award-year badge bg-dark mb-3">Top 100</span>
                <p class="text-muted">Ranked in Top 100 out of 33,102 nominations by India SME Forum in association with
                  AXIS Bank.</p>
              </div>
            </div>

          </div>
        </div>

      </section> 
      <section id="capacity" class="stats section" style={{background: ImageLinks.backgroundGold, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>


        <div class="container section-title" data-aos="fade-up">
          <h2>Trusted By Industry Leaders</h2>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 text-center">
            <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100"> 
              <img src={ImageLinks.wallmart} alt="Walmart" class="img-fluid" style={{ maxWidth: '150px', height: 'auto' }} />
            </div>
            <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <img src={ImageLinks.michaels} alt="Michaels" class="img-fluid" style={{ maxWidth: '150px', height: 'auto' }} />
            </div>
            <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <img src={ImageLinks.hobbylobby} alt="Hobby Lobby" class="img-fluid" style={{ maxWidth: '150px', height: 'auto' }} />
            </div>
            <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <img src={ImageLinks.horizon} alt="Horizon" class="img-fluid" style={{ maxWidth: '150px', height: 'auto' }} />
            </div>
             <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <img src={ImageLinks.roff} alt="Roff" class="img-fluid" style={{ maxWidth: '150px', height: 'auto' }} />
            </div>
          </div>

           
         
        </div>
      </section>

    </>
  );
};

export default HeroSection;
