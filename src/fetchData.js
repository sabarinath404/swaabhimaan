// src/fetchData.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Make sure db is correctly initialized

// Function to fetch products from Firebase Firestore
export const fetchProducts = async () => {
  try {
    const productsCollection = collection(db, 'users'); // Replace 'products' with the actual collection name
    const querySnapshot = await getDocs(productsCollection);
    
    // Map the documents to an array of product objects
    const products = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      products.push({
        productId: doc.id,
        ...productData,
      });
    });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
export async function fetchProductById(productId) {
  // Replace this with your actual data fetching logic
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const product = await response.json();
  return product;
}