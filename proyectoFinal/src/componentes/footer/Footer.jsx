import "./Footer.css"
import Wpp from "../../assets/img/logowpp.png"

function Footer(){
    return(
        
        <footer className="footer">
        <div className="mt-3">
            <a className="nav-link active" aria-current="page" href="./nosotros.html">Nosotros</a>
            <a className="nav-link" href="./contacto.html">Contacto</a>
        </div>
        <aside className="whatsapp">
            <a href="https://wa.me/1530288807">
            <img src={Wpp} alt="" className="wppImg"/>
                
            </a>
        </aside>
    </footer>

        
        
    )
}

export default Footer;