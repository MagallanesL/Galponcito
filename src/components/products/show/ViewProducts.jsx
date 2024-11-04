import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseconfig';
import styles from './ViewProducts.module.css';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, 'productos');

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.productsContainer}>
      <h2>Lista de Productos</h2>
      <div className={styles.cardsContainer}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.imageURL} alt={product.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <p className={styles.cardDescription}>{product.description}</p>
              <p className={styles.cardPrice}>${product.price}</p>
              <button className={styles.btn}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
