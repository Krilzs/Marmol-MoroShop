import React from 'react'
import Header from './Components/Header/Header'
import styles from './App.module.css'
import Marmol from './Assets/owners1.jpg'
import Moro from './Assets/owner2.jpg'
import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <Header inHomePage={true} />
      <article className={styles.homePage}>
          <div className={styles.heroPresentation}>
            <span className={styles.heroText}>
              <h1>WELCOME TO OUR SHOP</h1>
              <h2>YOUR ONE STOP SHOP</h2>
              <p>Where you can find the best products at the best prices</p>
            </span>
            <div className={styles.owners}>
              <img src={Marmol} alt="Marmol" />
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
              <img src={Moro} alt="Moro" />
              <span className={styles.ownerInfo}>
                  <h3>Moro</h3>
                  <span>
                    <p>Owner</p>
                    <p>
                      Hi I'm Moro, one of the owners of this shop, I'm a dog.<br/>
                      We are very happy to have you here.
                    </p>
                  </span>
              </span>
            </div>
          </div>
        <div className={styles.storeImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="white" class="bi bi-shop" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
          </svg>
          <h2><Link to="/store">Go to Store</Link></h2>
        </div>
      </article>
    </>
  )
}

export default App
