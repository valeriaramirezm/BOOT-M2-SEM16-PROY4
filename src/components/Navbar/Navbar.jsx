import { NavLink, Link } from 'react-router-dom'
import './Navbar.css' // Importamos el archivo Navbar.css

export const Navbar = () => {
    
  return (
    <header>
        <nav>
            <div className="logo">
                <NavLink to="/">
                    <img src="src/assets/logo.png"></img>
                </NavLink>

            </div>

            <ul>
                <li><NavLink to="/Inicio">Inicio</NavLink></li>
                <li><NavLink to="/NuestroMenu">Menú</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
