import React from 'react'
import styles from './Navbar.module.css'

const NavBar = () => {
  return (
    <div className={styles.mainTop}>
      <div className={styles.topText}>
        <h1>Nature Space Yoga Studio</h1>
        <small>Yoga is the way of life!</small>
      </div>
    </div>
  )
}

export default NavBar