import { NavLink, Link } from 'react-router-dom'
import './Navbar.css' // Importamos el archivo Navbar.css
import logo from '../../assets/logo.png'

export const Navbar = () => {
    
  return (
    <header>
        <nav>
            <div className="logo">
                <NavLink to="/">
                    <img src={logo}></img>
                </NavLink>

            </div>

            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/NuestroMenu">Menú</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
