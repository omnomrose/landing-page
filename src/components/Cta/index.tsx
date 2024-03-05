import React from 'react';
import styles from '@/components/Cta/Cta.module.css';

export default function Cta() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h1 className={styles.subscribe}>Subscribe to our Newsletter</h1>
        <p className={styles.subheader}>Your donations help provide vital essentials for the animals at Haven.</p>
        <div className={styles.input}>
          <input type="email" placeholder="youremail@gmail.com" className={styles.inputBox}/>
          <button className={styles.signBtn}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
