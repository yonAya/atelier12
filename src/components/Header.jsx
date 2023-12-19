import React from 'react'
import styles from './header.module.css'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h1>ISMO SHOP</h1>
      <p>
        Panier : Nombre d'articles : {props.nbart}
        {'\t'}
        Montant total : {props.total}
      </p>
    </header>
  )
}
