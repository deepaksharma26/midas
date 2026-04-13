import React from "react";

const Contact = () => {
  return (
    <>
     <section id="call-to-action" class="call-to-action section light-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-5 align-items-center">

          <div class="col-lg-6">
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

          <div class="col-lg-6">
            <div class="cta-form-section" data-aos="fade-left" data-aos-delay="300">
              <div class="form-container">
                <div class="form-header">
                  <h3>Request Your Free Quote</h3>
                  <p>Get started with your custom glitter order today</p>
                </div>

                <form action="#" name="contact-form" method="post" class="php-email-form">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" name="name" class="form-control" placeholder="Your Name" required=""/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" name="email" class="form-control" placeholder="Your Email" required=""/>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input type="tel" name="phone" class="form-control" placeholder="Phone Number" required=""/>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <select name="type" class="form-control" required="">
                          <option value="">Select Product / Interest</option>
                          <option value="glitter-powder">Glitter Powder</option>
                          <option value="bio-glitter">Biodegradable Glitter</option>
                          <option value="metallised-films">Metallised Films</option>
                          <option value="sequins">Sequins & Confetti</option>
                          <option value="glitter-glue">Glitter Glue</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea name="message" class="form-control" rows="4" placeholder="Project Details"
                          required=""></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your quote request has been sent. Thank you!</div>

                  <div class="form-actions">
                    <button type="submit" class="btn btn-primary">
                      <i class="bi bi-send"></i>
                      Send Quote Request
                    </button>

                    <div class="contact-alternative">
                      <span>Or call us directly:</span>
                      <a href="tel:+91999xxxxxxx" class="phone-link">
                        <i class="bi bi-telephone-fill"></i>
                        +91 (xxx) xxx-xxxx
                      </a>
                    </div>
                  </div>
                </form>
              </div>


            </div>
          </div>

        </div>

      </div>

    </section>
    </>


    );
};
export default Contact;