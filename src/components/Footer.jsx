import React from 'react'; 
import logo from '../assets/img/logo-transparent.png';
const Footer = () => (
    <footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src={logo} alt="Midas Glitter"/>
          </a>
          <p>Anron Metalisers Pvt. Ltd. - Premium manufacturers of glitter powder, sequins, biodegradable glitter, and
            metallised films. Export arm of Advance Syntex Ltd., industry veterans since 1978.</p>
          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/infrastructure">Infrastructure</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Products</h4>
          <ul>
            <li><a href="products.html#glitter">Glitter Powder</a></li>
            <li><a href="products.html#biodegradable">Biodegradable Glitter</a></li>
            <li><a href="products.html#glue">Glitter Glue</a></li>
            <li><a href="products.html#films">Metallised Films</a></li>
            <li><a href="products.html#sequins">Sequins & Confetti</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>Anron Metalisers Pvt. Ltd.</p>
          <p>Gujarat, India</p>
          <p class="mt-3"><strong>Export Markets:</strong></p>
          <p>USA | Russia | Germany | France | Italy | Spain | Turkey | Israel</p>
          <p class="mt-3"><strong>Email:</strong> <span>exports@anronmetalisers.com</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Anron Metalisers Pvt. Ltd.</strong> <span>All Rights
          Reserved</span></p>
      <div class="credits">
        Brand: Midas Glitter | The Ultimate In Brilliance
      </div>
    </div>

  </footer>
);

export default Footer;
