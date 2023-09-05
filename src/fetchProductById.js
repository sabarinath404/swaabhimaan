// import { doc, getDoc } from 'firebase/firestore';
// import { db } from './firebase'; // Make sure db is correctly initialized

// const getProduct = async (productId) => {
//   try {
//     const productRef = doc(db, 'users', productId);
//     const productSnapshot = await getDoc(productRef);
    
//     if (productSnapshot.exists()) {
//       return productSnapshot.data();
//     } else {
//       throw new Error('Product not found');
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// export default getProduct;