import React from 'react'
import Header from './Components/Header/Header'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header inHomePage={true} />
      <article className={styles.homePage}>
        <div className={styles.hero}>
          <div className={styles.heroPresentation}>
          <h1>WELCOME TO OUR SHOP</h1>
          <h2>YOUR ONE STOP SHOP</h2>
          <p>Where you can find the best products at the best prices</p>
          <div className={styles.owners}>
            <img src="/src/assets/owners1.jpg" alt="Marmol" />
            <span className={styles.ownerInfo}>
              <h3>Marmol</h3>
              <p>Owner</p>
              <p>
                Hi I'm Marmol, one of the owners of this shop, I'm a cat.<br/>
                We are very happy to have you here.
              </p>
            </span>
          </div>
          <div className={styles.owners}>
            <img src="/src/assets/owner2.jpg" alt="" />
            <span className={styles.ownerInfo}>
                <h3>Moro</h3>
                <p>Owner</p>
                <p>
                  Hi I'm Moro, one of the owners of this shop, I'm a dog.<br/>
                  We are very happy to have you here.
                </p>
            </span>
          </div>
          </div>
        </div>
        <div className={styles.heroImage}>

        </div>
      </article>
    </>
  )
}

export default App
