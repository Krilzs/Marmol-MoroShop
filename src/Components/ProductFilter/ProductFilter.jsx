import styles from "./ProductFilter.module.css"
import { useState } from "react"
const ProductFilter = ({handleFilterChange}) => {
    const [filter, setFilter] = useState({price: 1000, category: null})

    const handleFilterPrice = (e) => {
        setFilter({...filter, price: e.target.value})}

    const handleCategoryPrice = (e) => {
        debugger;
        if(e.target.value === 'all'){
            setFilter({...filter,  category: null})
            return
        }
        setFilter({...filter, category: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFilterChange(filter)
    }
    
    return (
        <div className={styles.productFilter}>
            <h2>Filter</h2>
            <form action="" onSubmit={handleSubmit} >
                <span className={styles.filterSpan}>
                <label htmlFor="category">Category</label>
                <select name="category" onChange={handleCategoryPrice} id="category">
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
                </span>
                <span className={styles.filterSpan}>
                <p>Max Price: ${filter.price}</p>
                <input type="range" onChange={handleFilterPrice} name="price" id="price" min="0" max="1000" step="1" />
                <label className={styles.priceLabel} htmlFor="price"><p>Min.</p><p>Max.</p></label>
                </span>
                <button>Add Filters</button>
            </form>
        </div>
    )
}

export default ProductFilter
