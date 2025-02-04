import styles from "./CartProduct.module.css"
const CartProduct = ({product, handleRemoveCart}) => {

    const handleRemove = () => {
        handleRemoveCart(product)
    }

    return (
        <div className={styles.productCart} key={product.id} >
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