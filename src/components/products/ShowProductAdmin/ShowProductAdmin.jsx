import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseconfig';
import styles from './ShowProductAdmin.module.css';

const Showproduct = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

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

  const handleEditClick = (product) => {
    setEditProductId(product.id);
    setEditedProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = async (id) => {
    const productDoc = doc(db, 'productos', id);
    await updateDoc(productDoc, editedProduct);
    setProducts(products.map((product) => 
      product.id === id ? { ...editedProduct, id } : product
    ));
    setEditProductId(null);
  };

  const handleDelete = async (id) => {
    const productDoc = doc(db, 'productos', id);
    await deleteDoc(productDoc);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.productsTitle}>Lista de Productos</h2>
      <div className={styles.tableResponsive}>
        <table className={`${styles.productsTable} table table-striped`}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Categoría</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {editProductId === product.id ? (
                  <>
                    <td>
                      <input 
                        type="text" 
                        name="name" 
                        value={editedProduct.name} 
                        onChange={handleInputChange} 
                        className={styles.formControl}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        name="description" 
                        value={editedProduct.description} 
                        onChange={handleInputChange} 
                        className={styles.formControl}
                      />
                    </td>
                    <td>
                      <input 
                        type="number" 
                        name="price" 
                        value={editedProduct.price} 
                        onChange={handleInputChange} 
                        className={styles.formControl}
                      />
                    </td>
                    <td>
                      <input 
                        type="number" 
                        name="quantity" 
                        value={editedProduct.quantity} 
                        onChange={handleInputChange} 
                        className={styles.formControl}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        name="category" 
                        value={editedProduct.category} 
                        onChange={handleInputChange} 
                        className={styles.formControl}
                      />
                    </td>
                    <td>
                      <button 
                        className={styles.btnSave} 
                        onClick={() => handleSave(product.id)}
                      >
                        Guardar
                      </button>
                      <button 
                        className={styles.btnCancel} 
                        onClick={() => setEditProductId(null)}
                      >
                        Cancelar
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td>
                      <button 
                        className={styles.btnEdit} 
                        onClick={() => handleEditClick(product)}
                      >
                        Editar
                      </button>
                      <button 
                        className={styles.btnDelete} 
                        onClick={() => handleDelete(product.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showproduct;
