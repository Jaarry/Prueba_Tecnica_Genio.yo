import { useState } from 'react';
import logo_empresa from "../assets/logo_genio.png"; //Importe solo una imagen para no traer toda la carpeta, ya que solo tenia un asset

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      document.body.classList.toggle('menu-open', !menuOpen); //Funcionalidad para el boton de navegacion
    };


  
    return (
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <a href="https://genio.soy/">
              <img src={logo_empresa} alt="Genio Logo" />
            </a>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>
          <nav className={`header__nav ${menuOpen ? 'open' : ''}`}> 
            <ul className='list-styles'>
              <li><a href="https://genio.soy/">Inicio</a></li>
              <li><a href="https://genio.soy/#nosotros">Nosotros</a></li>
              <li><a href="https://genio.soy/servicios/">Servicios</a></li>
              <li><a href="https://genio.soy/clientes/">Clientes</a></li>
              <li><a href="https://genio.soy/blog-basicofm">Blog</a></li>
              <li><a href="https://genio.soy/contacto/">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;