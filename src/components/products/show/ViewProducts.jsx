import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseconfig';
import './ViewProducts.css'; // Asegúrate de importar el archivo CSS

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
    <div className="products-container">
      <h2>Lista de Productos</h2>
      <div className="cards-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imageURL} alt={product.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-description">{product.description}</p>
              <p className="card-price">${product.price}</p>
              <p className="card-quantity">Cantidad: {product.quantity}</p>
              <p className="card-category">Categoría: {product.category}</p>
              <button className="btn">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProducts;
