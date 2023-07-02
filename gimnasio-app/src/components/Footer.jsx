import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h5>Contacto</h5>
            <p>Dirección del Gimnasio</p>
            {/* Agrega aquí el mapa de ubicación */}
          </div>
          <div className="col-md-6">
            <h5>Redes Sociales</h5>
            <div className="social-icons">
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.github.com/">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+123456789">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} Gimnasio App. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
