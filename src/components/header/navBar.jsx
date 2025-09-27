import './navBar.css'
import logo from '../../images/SM-logo.png'
import CartWidget from '../cart-widget/cartWidget'

const NavBar = () => {

return (
    
    <header className="header">
        <div className="max-content">
            <div className="logo-container">
                <img src={logo} alt="logo de la marca" />
            </div>

            <nav className="nav-container">
                <ul>
                    <li>                        
                        <a href="#">Teclados</a>
                    </li>
                    <li>                        
                        <a href="#">Mouses</a>  
                    </li>
                    <li>                        
                        <a href="#">MousePads</a>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </div>

    </header>
)
    
}

export default NavBar
