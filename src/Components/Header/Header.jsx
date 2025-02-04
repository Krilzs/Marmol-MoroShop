import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import Cart from "../Cart/Cart"
import { useState } from "react"
const Header = ({CartProducts , handleRemoveCart, inHomePage}) => {

    const [openCart, setOpenCart] = useState(false)



    return (
        <header className={styles.header}>
            <div>
                <Link to="/"><h1>Marmol&Moro</h1> </Link>   
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        {inHomePage ? null : <li><button className={styles.cartButton} onClick={() => setOpenCart(!openCart)}>{openCart ? "Close Cart" : "Open Cart"}</button></li>}
                    </ul>
                </nav>
            </div>
            {openCart ? <Cart CartProducts={CartProducts} handleRemoveCart={handleRemoveCart}/>: null}
        </header>
    )
}

export default Header