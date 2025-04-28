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
            <button className={styles.removeButton} onClick={handleRemove}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </div>
    )
}

export default CartProduct