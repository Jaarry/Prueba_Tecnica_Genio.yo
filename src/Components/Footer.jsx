const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer"> 
        <div>
          <p>&copy; {currentYear} Genio.soy. Todos los derechos reservados.</p> 
          <ul className="footer__links">
            <li><a className="buton-hover" href="https://genio.soy/aviso-de-privacidad/">Aviso de Privacidad</a></li> 
            
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer; //Para el Footer, fue necesario actualizar la lógica del año, ya que vi que en su aplicación web no incluía esta funcionalidad dinámica.