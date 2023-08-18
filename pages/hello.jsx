import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Correctly import Firebase Storage functions
import { db } from './firebase'; // Import the Firebase Firestore instance

function AddProduct() {
  const [productData, setProductData] = useState({
    title: '',
    price: 0,
    features: '',
    description: '',
    productNumber: '',
    photo: null,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProductData((prevData) => ({ ...prevData, photo: file }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Upload photo to Firebase Storage and get download URL
    const storageRef = ref(getStorage(), productData.photo.name); // Use the photo name directly
    await uploadBytes(storageRef, productData.photo);
    const photoUrl = await getDownloadURL(storageRef);

    // Save product details to Firestore
    try {
      const productsCollection = collection(db, 'products');
      const newProduct = {
        title: productData.title,
        price: productData.price,
        features: productData.features,
        description: productData.description,
        productNumber: productData.productNumber,
        photoUrl: photoUrl,
      };
      await addDoc(productsCollection, newProduct);
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  
  return (
    <div>
    <h1>Add Product</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setProductData((prevData) => ({ ...prevData, title: e.target.value }))} />
      <input type="number" placeholder="Price" onChange={(e) => setProductData((prevData) => ({ ...prevData, price: parseFloat(e.target.value) }))} />
      <textarea placeholder="Features" onChange={(e) => setProductData((prevData) => ({ ...prevData, features: e.target.value }))}></textarea>
      <textarea placeholder="Description" onChange={(e) => setProductData((prevData) => ({ ...prevData, description: e.target.value }))}></textarea>
      <input type="text" placeholder="Product Number" onChange={(e) => setProductData((prevData) => ({ ...prevData, productNumber: e.target.value }))} />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Add Product</button>
    </form>
  </div>
  );
}

export default AddProduct;
