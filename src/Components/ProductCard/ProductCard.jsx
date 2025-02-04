import styles from "./ProductCard.module.css"

const ProductCard = ({product, handleAddCart}) => {
    return (
        <div className={styles.productCard}> 
            <div className={styles.imgContainer}>
                <img src={product.image} alt="" />
            </div>
            <div className={styles.textContainer}>
                <span><h2>{product.title}</h2></span>
                <p>${product.price}</p>
            </div>   
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => handleAddCart(product)}>Add to Cart</button>  
            </div>
        </div>
    )
}   

export default ProductCard