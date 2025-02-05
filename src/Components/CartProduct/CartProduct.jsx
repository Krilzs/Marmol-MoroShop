import styles from "./CartProduct.module.css"
const CartProduct = ({product, handleRemoveCart,numero}) => {
    console.log(numero)
    const handleRemove = () => {
        handleRemoveCart(numero)
    }

    return (
        <div className={styles.productCart} onClick={() => console.log(numero)} >
            <div className={styles.imgContainer}>
                <img src={product.image} alt="" />
            </div>
            <div className={styles.textContainer}>
                <span><h2>{product.title}</h2></span>
                <div className={styles.priceContainer}>
                    <p className={styles.price}>${(product.price * product.count).toFixed(2)}</p>
                    <p className={styles.quantity}>{product.count}</p>
                </div>
            </div>
            <button className={styles.removeButton} onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default CartProduct