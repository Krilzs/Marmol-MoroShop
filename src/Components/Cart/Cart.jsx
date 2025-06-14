import styles from "./Cart.module.css"
import CartProduct from "../CartProduct/CartProduct"

const Cart = ({CartProducts , handleRemoveCart,handleCart}) => {
    
    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartHeader}>
                <h2>Your Cart</h2>
                <p>Total: ${CartProducts.reduce((acc, product) => acc + (product.price * product.count), 0).toFixed(2)}</p>
                <button onClick={handleCart}>Close</button>
            </div>
            <div className={styles.productsContainer}>
                {
                    CartProducts.length > 0 ? CartProducts.map((product, index) => (<CartProduct handleRemoveCart={handleRemoveCart} product={product} numero={index} />)) : <h2 className={styles.emptyCart}>Cart is empty</h2>
                }
            </div>
        </div>
    )
}

export default Cart