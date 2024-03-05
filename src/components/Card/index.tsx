import React from 'react';
import styles from '@/components/Card/Card.module.css'
import Spline from '@splinetool/react-spline';


export default function Card({ header, description, splineScene }: ICard) {
  return (
    <div className={styles.card}>
        <div className={styles.spline}>
        <Spline scene={splineScene} />
        </div>
      <div className={styles.content}>
      {header && <div className={styles.header}>{header}</div>}
      {description && <div className={styles.description}>{description}</div>}
      <button className={styles.donateBtn}>Donate Now</button>
      </div>
    </div>
  );
}

