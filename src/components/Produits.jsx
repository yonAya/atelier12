import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Produit from './Produit'
import styles from './produits.module.css'
import Header from './Header'

export default function Produits() {
  const [categories, setCategories] = useState([])
  const [produits, setProduits] = useState([])
  const [catid, setCatId] = useState('')
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getData = async () => {
      const cats = await axios.get('https://api.escuelajs.co/api/v1/categories')
      setCategories(cats.data)
    }
    getData()
  }, [])
  useEffect(() => {
    const getData = async () => {
      const prods = await axios.get('https://api.escuelajs.co/api/v1/products')
      let filterprods = prods.data
      if (catid !== '') {
        filterprods = prods.data.filter(
          (p) => p.category.id === parseInt(catid)
        )
      }
      setProduits(filterprods)
    }
    getData()
  }, [catid])

  const handleAddToCart = (product) => {
    // Ajouter le produit au panier
    setCart([...cart, product])
  }

  return (
    <>
      <Header nbart={cart.length} total={''} />
      <div className={styles.prds}>
        <select onChange={(e) => setCatId(e.target.value)}>
          <option value="">Tous les produits</option>
          {categories.map((cat) => {
            return (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            )
          })}
        </select>
        <div className={styles.produits}>
          {produits.map((p) => (
            <Produit
              key={p.id}
              image={p.images[0]}
              title={p.title}
              description={p.description}
              prix={p.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  )
}
