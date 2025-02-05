import styles from "./ProductCard.module.css"
import {useState} from "react"
const ProductCard = ({product, handleAddCart}) => {

    const [count, setCount] = useState(1)

    const handleCountChange = (event) => {
        if(event.target.value < 1) return
        setCount(event.target.value)
    }
    return (
        <div className={styles.productCard}> 
            <div className={styles.imgContainer}>
                <img src={product.image} alt="" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.descriptionContainer}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p>Description</p>
                    <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <p className={styles.price}>${product.price}</p>
                    <span>
                        <input className={styles.input} type="number" value={count} onChange={handleCountChange} name="count" id="count" />
                        <button className={styles.button} onClick={() => handleAddCart(product, count)}>Add</button>  
                    </span>
                </div>
            </div>   
        </div>
    )
}   

export default ProductCard