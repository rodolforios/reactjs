import React from 'react'
import styles from "./CarDetail.module.css"

const CarDetails = ({marca,cor,ano}) => {
  return (
    <div>
    <h2 className={styles.my_title}>Detalhe do carro</h2>
    <ul className={styles.my_list}>
        <li className={styles.my_item}>Marca: {marca}</li>
        <li className={styles.my_item}>cor: {cor}</li>
        <li className={styles.my_item}>ano: {ano}</li>



    </ul>
    


    </div>
  )
}

export default CarDetails