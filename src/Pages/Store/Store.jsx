import Header from "../../Components/Header/Header"
import StoreShop from "../../Components/StoreShop/StoreShop"
import ProductFilter from "../../Components/ProductFilter/ProductFilter"
import styles from "./Store.module.css"
import { useState, useEffect } from "react"
const Store = () => {

    
    const [products,setProducts] = useState([])
    const [price,setPrice] = useState(1000)
    const [category,setCategory] = useState(null)
    const [cartProducts,setCartProducts] = useState([])
    console.log(cartProducts,'cartProducts')
    const handleAddCart = (newproduct) =>{
        setCartProducts((prevCartProducts) => [...prevCartProducts, newproduct])
    }
    const handleRemoveCart = (numero) =>{ 
        setCartProducts((prevCartProducts) => prevCartProducts.filter((product, index) => index !== numero))
    }

    const handleFilterChange = (filter) => {
        debugger
        setPrice(filter.price)
        setCategory(filter.category)
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(Response => Response.json())
        .then(json => setProducts(json)).catch(error => console.log(error))
    },[])   

    return (
        <>
            <Header CartProducts={cartProducts} handleRemoveCart={handleRemoveCart} />
            <div className={styles.storeContainer}>
            <ProductFilter handleFilterChange={handleFilterChange}/>
            <StoreShop handleAddCart={handleAddCart}  products={products} price={price} category={category}/>
            </div>
        </>
    )
}

export default Store