import React from 'react';
import facebook from '../../Images/facebook.svg';
import instagram from '../../Images/instagram.svg';

const Footer = () => (
  <footer id="footer">
    <div id="facebook">
      <img src={facebook} alt="facebook" />
      <a href="#">Facebook</a>
    </div>
    <div id="instagram">
      <img src={instagram} alt="instagram" />
      <a href="#">Instagram</a>
    </div>
    <div id="adriel">



      Template ©
<a href="#">Mostra Soluções Visuais</a>
    </div>
  </footer>
);

export default Footer;
