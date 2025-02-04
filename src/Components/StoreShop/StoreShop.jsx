import { useEffect,useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './StoreShop.module.css'

const StoreShop = ( {products, price, category, handleAddCart}) => {

    if(products.length == 0){
        return (
            <>
                <div className={styles.loading}>
                    <h2>Loading...</h2>
                </div>
            </>
        )
    }

    
    return (
        <>
            <div className={styles.productsContainer}>
                {
                    !category ? products.filter(product => product.price <= price).map(product => (
                        <ProductCard handleAddCart={handleAddCart} product={product} key={product.id} />
                    )) : products.filter(product => product.category === category && product.price <= price).map(product => (
                        <ProductCard handleAddCart={handleAddCart} product={product} key={product.id} />
                    ))
                }
            </div>
        </>
        )
}

export default StoreShop

//{products.map(product => (
//   <ProductCard product={product} key={product.id} />
//))}