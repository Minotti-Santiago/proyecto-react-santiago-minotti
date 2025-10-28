import './navBar.css'
import logo from '../../images/SM-isologo.png'
import CartWidget from '../cart-widget/cartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

return (
    
    <header className="header">
        <div className="max-content">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="logo de la marca" />
                </Link>
            </div>

            <nav className="nav-container">
                <ul>
                    <li>                        
                        <Link className='header-link' to="/category/teclado">Teclados</Link>
                    </li>
                    <li>                        
                        <Link className='header-link' to="/category/mouse">Mouses</Link>  
                    </li>
                    <li>                        
                        <Link className='header-link' to="/category/mousepad">MousePads</Link>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </div>

    </header>
)
    
}

export default NavBar
