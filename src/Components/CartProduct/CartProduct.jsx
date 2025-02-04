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
                    <p>${product.price}</p>
                    <button onClick={handleRemove}>Remove</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartProduct