import React from 'react'; 
import { Email, LocationOn, LinkedIn, Instagram, Facebook, X, Google, Phone } from '@mui/icons-material';

const TopBar = () => (
  <div class="topbar d-flex align-items-center dark-background">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <Email style={{ marginRight: '8px', color: '#f5f6f7' }} />
          <a href="mailto:exports@anronmetalisers.com">exports@anronmetalisers.com</a>
          <LocationOn style={{ marginLeft: '16px', marginRight: '8px', color: '#f5f6f7'}} />
         <a href="#"><span>Gujarat, India</span></a> 
         <Phone style={{ marginLeft: '16px', marginRight: '8px', color: '#f5f6f7'}} />
         <a href="tel:+91999xxxxx"><span>+91 99999 xxxxx</span></a>
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
          <a href="#" class="linkedin"><LinkedIn /></a>
          <a href="#" class="instagram"><Instagram /></a>
          <a href="#" class="apple"><X /></a>
          <a href="#" class="facebook"><Facebook /></a>
          <a href="#" class="apple"><Google /></a>
        </div>
      </div>
    </div> 
);

export default TopBar;
