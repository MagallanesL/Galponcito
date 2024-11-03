import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseconfig";

const EditProduct = ({ productId, onEditSuccess }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  // Cargar datos del producto al montar el componente
  useEffect(() => {
    const loadProductData = async () => {
      const productDoc = doc(db, "productos", productId);
      const productData = await getDoc(productDoc);
      if (productData.exists()) {
        const product = productData.data();
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setQuantity(product.quantity);
        setCategory(product.category);
      }
    };
    loadProductData();
  }, [productId]);

  // Actualizar producto
  const handleUpdate = async (e) => {
    e.preventDefault();
    const productDoc = doc(db, "productos", productId);
    await updateDoc(productDoc, {
      name,
      description,
      price: Number(price),
      quantity: Number(quantity),
      category,
    });

    // Opcional: Llamar a una función pasada como prop para actualizar la lista de productos en la vista
    if (onEditSuccess) onEditSuccess();
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Precio:</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Cantidad:</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Categoría:</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="pizza">Pizza</option>
            <option value="sandwich">Sándwich</option>
          </select>
        </div>
        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default EditProduct;
