import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import Cart from "../Cart/Cart"
import { useState } from "react"
const Header = ({CartProducts , handleRemoveCart, inHomePage}) => {

    const [openCart, setOpenCart] = useState(false)

    const handleOpenCart = () => {
        setOpenCart(!openCart)
    }


    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to="/"><h1>Marmol&Moro</h1> </Link>
                <button className={styles.burgerButton} onClick={() => {document.querySelector("nav").classList.toggle(styles.active) }}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </button>   
            </div>
            <div>
                <nav>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        {inHomePage ? null : <li><button className={styles.cartButton} onClick={handleOpenCart}>{openCart ? "Close Cart" : "Open Cart"}</button></li>}
                    </ul>
                </nav>
                
            </div>
            {openCart ? <Cart CartProducts={CartProducts} handleCart={handleOpenCart} handleRemoveCart={handleRemoveCart}/>: null}
        </header>
    )
}

export default Header