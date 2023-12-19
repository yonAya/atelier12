import React from 'react'
import styles from './produit.module.css'

function Produit(props) {
  const handleClick = () => {
    // Appeler la fonction pour ajouter le produit au panier
    props.onAddToCart(props.product)
  }

  return (
    <div className={styles.produit}>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h4>Prix : {props.prix}</h4>
      <button onClick={handleClick}>Ajouter au panier</button>
    </div>
  )
}

export default Produit
