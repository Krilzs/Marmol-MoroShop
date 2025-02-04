import React from 'react'
import Header from './Components/Header/Header'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header inHomePage={true} />
      <article className={styles.homePage}>
        <div className={styles.hero}>
          <div>
            <h1>WELCOME TO MARMOL&MORO</h1>
            <p>At Mármol & Moro you’ll find quality products, great prices, and excellent service in a modern and welcoming space. Enjoy a unique shopping experience designed just for you.</p>
          </div>
          <div>
            <img src="./src/assets/logo.png" alt="" />
          </div>
        </div>
        
        <div className={styles.homeContainer}>
      <div className={styles.section}>
        <h2>About Us</h2>
        <p>At Mármol & Moro, we are committed to offering high-quality products at the best prices. Our goal is to provide an exceptional shopping experience in a modern and welcoming environment.</p>
      </div>

      <div className={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide selection of top-quality products</li>
          <li>Competitive prices that fit your budget</li>
          <li>Friendly and personalized customer service</li>
          <li>Online shopping with fast delivery options</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Our Values</h2>
        <p>We believe in quality, innovation, and sustainability. We work closely with local suppliers to support our community and offer fresh and eco-friendly products.</p>
      </div>
    </div>

      </article>
    </>
  )
}

export default App
