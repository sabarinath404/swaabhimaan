import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Make sure db is correctly initialized
console.log("hello")
const fetchProductById = async (productId) => {
    console.log("hello")
    try {
      
      const productRef = doc(db, 'users', productId);
      const productSnapshot = await getDoc(productRef);
      
      if (productSnapshot.exists()) {
        console.log("got call")
        const product = productSnapshot.data();
        return JSON.stringify(product);
      } else {
        throw new Error('Product not found');
      }
    } catch (error) {
      throw error;
    }
  };

export default fetchProductById;