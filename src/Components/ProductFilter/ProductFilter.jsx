import styles from "./ProductFilter.module.css"
import { useState } from "react"
const ProductFilter = ({handleFilterChange}) => {
    const [filter, setFilter] = useState({price: 1000, category: null})

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

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
        <article className={styles.productFilter}>
            <h2>Filter</h2>
            <form action="" className={styles.formFilter} onSubmit={handleSubmit} >
                <span className={styles.filterSpan}>
                    <label htmlFor="category">Category</label>
                    <select className={styles.select} name="category" onChange={handleCategoryPrice} id="category">
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
                <button type="submit" className={styles.button}>Add Filters</button>
            </form>
            <div className={styles.filterButton}>
                <button  onClick={() => { document.querySelector("form").classList.toggle(styles.active); document.querySelector("article").classList.toggle(styles.active); handleToggle() }}>
                    {isOpen ? 
                    <span className={styles.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                            <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"/>
                        </svg>
                    </span> 
                    : 
                    <span className={styles.open}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
                        </svg>
                    </span>}
                </button>
            </div>
        </article>
    )
}

export default ProductFilter
