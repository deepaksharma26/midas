import React from 'react';
import '../assets/css/main.css'; // Assuming you will style the page in About.css
import './About.css'; // Specific styles for the About page
import { Person } from '@mui/icons-material';
const About = () => {
  return (
    <>
         <section id="call-to-action" class="call-to-action section dark-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-5 align-items-center">

          <div class="col-lg-12">
            <div class="cta-hero-content" data-aos="fade-right" data-aos-delay="200">
              <div class="badge-wrapper">
                <span class="cta-badge">
                  <i class="bi bi-shield-check"></i>
                  Trusted Global Partner Since 1978
                </span>
              </div>

              <h2>Elevate Your Products with Midas Brilliance</h2>
              <p>Partner with a world-class manufacturer dedicated to quality, innovation, and sustainability. From bulk
                glitter powder to precision-cut sequins, we deliver excellence that meets global standards.
              </p>

              <div class="feature-highlights">
                <div class="highlight-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Customized solutions for diverse industrial applications</span>
                </div>
                <div class="highlight-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Compliance with international safety standards (FDA, EN71)</span>
                </div>
                <div class="highlight-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Dedicated support and seamless global logistics</span>
                </div>
              </div>
            </div>
          </div>

          

        </div>

      </div>

    </section>
  
    <section id="leadership" class="team section light-background">

      
      <div class="container section-title" data-aos="fade-up">
        <h2>Leadership Team</h2>
        <p>Experienced professionals driving innovation and excellence</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 justify-content-center">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member text-center p-4 rounded bg-white shadow-sm">
              <div class="member-icon mb-3" style={{ fontSize: '3rem', color: '#D4AF37' }}>
                <Person fontSize='72' sx={{
                    borderRadius: '50%',
                    backgroundColor: '#553C9A',
                    padding: '8px',
                    color: '#f5f6f7',   
                }}/>
              </div>
              <h4>Bhavan Dhirendra Vora</h4>
              <span class="member-role" style={{ color: '#553C9A', fontWeight: '600' }}>CEO</span>
              <p class="mt-3 text-muted">25+ years in Zari business. Expert in Business Development, International
                Marketing, and Finance. Secured business with Michaels and Horizon Group.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="team-member text-center p-4 rounded bg-white shadow-sm">
              <div class="member-icon mb-3" style={{ fontSize: '3rem', color: '#D4AF37' }}>
               <Person fontSize='72' sx={{
                    borderRadius: '50%',
                    backgroundColor: '#553C9A',
                    padding: '8px',
                    color: '#f5f6f7',   
                }}/>
              </div>
              <h4>Devang Vora</h4>
              <span class="member-role" style={{ color: '#553C9A', fontWeight: '600' }}>CTO</span>
              <p class="mt-3 text-muted">Textile Engineering graduate. 10 years experience in coating and manufacturing.
                Successfully delivered to Michaels and Walmart.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member text-center p-4 rounded bg-white shadow-sm">
              <div class="member-icon mb-3" style={{ fontSize: '3rem', color: '#D4AF37' }}>
               <Person fontSize='72' sx={{
                    borderRadius: '50%',
                    backgroundColor: '#553C9A',
                    padding: '8px',
                    color: '#f5f6f7',   
                }}/>
              </div>
              <h4>Niraj Sadhu</h4>
              <span class="member-role" style={{ color: '#553C9A', fontWeight: '600' }}>Director</span>
              <p class="mt-3 text-muted">MHRM qualified. Expert in factory setup for exports and completing FCCA, CTPAT,
                SMETA audits for international buyers.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="team-member text-center p-4 rounded bg-white shadow-sm">
              <div class="member-icon mb-3" style={{ fontSize: '3rem', color: '#D4AF37' }}>
                <Person fontSize='72' sx={{
                    borderRadius: '50%',
                    backgroundColor: '#553C9A',
                    padding: '8px',
                    color: '#f5f6f7',   
                }}/>
              </div>
              <h4>Suresh Kothari</h4>
              <span class="member-role" style={{ color: '#553C9A', fontWeight: '600' }}>Director</span>
              <p class="mt-3 text-muted">40+ years experience marketing Metallic Yarn and Glitter Powder in India. Deep
                expertise in domestic distribution.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="team-member text-center p-4 rounded bg-white shadow-sm">
              <div class="member-icon mb-3" style={{ fontSize: '3rem', color: '#D4AF37' }}>
                <Person fontSize='72' sx={{
                    borderRadius: '50%',
                    backgroundColor: '#553C9A',
                    padding: '8px',
                    color: '#f5f6f7',   
                }}/>
              </div>
              <h4>Darshana Vora</h4>
              <span class="member-role" style={{ color: '#553C9A', fontWeight: '600' }}>Product Design Head</span>
              <p class="mt-3 text-muted">20+ years in design. Expertise in product development and creating versatile
                collections for national and international brands.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div class="team-member text-center p-4 rounded bg-white shadow-sm">
              <div class="member-icon mb-3" style={{ fontSize: '3rem', color: '#D4AF37' }}>
                <Person fontSize='72' sx={{
                    borderRadius: '50%',
                    backgroundColor: '#553C9A',
                    padding: '8px',
                    color: '#f5f6f7',   
                }}/>
              </div>
              <h4>Himani Vishen</h4>
              <span class="member-role" style={{ color: '#553C9A', fontWeight: '600' }}>Business Development Manager</span>
              <p class="mt-3 text-muted">20+ years with Li & Fung, handling JC Penny, JoAnn, Michaels. Expert in buyer
                relations, sampling, and approvals.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div class="team-member text-center p-4 rounded bg-white shadow-sm">
              <div class="member-icon mb-3" style={{ fontSize: '3rem', color: '#D4AF37' }}>
                <Person fontSize='72' sx={{
                    borderRadius: '50%',
                    backgroundColor: '#553C9A',
                    padding: '8px',
                    color: '#f5f6f7',   
                }}/>
              </div>
              <h4>Vidhi Mehta</h4>
              <span class="member-role" style={{ color: '#553C9A', fontWeight: '600' }}>Director - HR & Compliance</span>
              <p class="mt-3 text-muted">MSW qualified. Expertise in HR and social compliances. Worked with Vintage
                Ceramics and Global Surfaces (Home Depot supplier).</p>
            </div>
          </div>

        </div>
      </div>

    </section>
      </>
  );
};

export default About;
