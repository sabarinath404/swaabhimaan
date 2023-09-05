import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../src/fetchData'; // Import the function to fetch products from Firebase

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(); // Use the fetchProducts function from your src/data file
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);


  useEffect(() => {
    // Log the document IDs when products change
    products.forEach((product) => {
      console.log('Produc--t ID:', product.productId); // Assuming productId is the field containing the document ID
    });
  }, [products]);

  return (
    <div>
      <h1>Product List</h1>
      
      {/* Category 1 */}
      <div>
        <h2 id='catagory2'>Category 1</h2>
        <div className="flex flex-wrap">
          {products
            .filter((product) => product.category === 'Category 1')
            .map((product, productIndex) => (
              <div
                key={productIndex}
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img
                    className="object-cover"
                    src={`/images/${product.imageName}`}
                    alt={product.productName}
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      {product.productName}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                    </p>
                  </div>
                  <a
                   href={`/productDisplayPage?id=${product.productId}`}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Category 2 */}
      <section id="category2">
      <div >
        <h2 >Category 2</h2>
        <div className="flex flex-wrap">
          {products
            .filter((product) => product.category === 'Category 2')
            .map((product, productIndex) => (
              <div
                key={productIndex}
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img
                    className="object-cover"
                    src={`/images/${product.imageName}`}
                    alt={product.productName}
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      {product.productName}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                    </p>
                  </div>
                  <a
                  href={`/productDisplayPage?id=${product.productId}`}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      </section>
    </div>
    
  );
};

export default ProductList;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from 'react';
// import { fetchProducts } from '../src/fetchData'; // Import the function to fetch products from Firebase

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products when the component mounts
//     const getProducts = async () => {
//       try {
//         const fetchedProducts = await fetchProducts(); // Use the fetchProducts function from your src/data file
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     getProducts();
//   }, []);

//   return (
//     <div>
//       {/* <h1>Product List</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <a href={`/product/${product.productId}`} key={product.productId}>
//             <div className="product-card group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   src={`/images/${product.imageName}`}
//                   alt={product.productName}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     {product.productName}
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">Product ID: {product.productId}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">${product.price}</p>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div> */}
//         <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
//   <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
//     <img class="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
//     </a>
//   <div class="mt-4 px-5 pb-5">
//     <a href="#">
//       <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
//     </a>
//     <div class="mt-2 mb-5 flex items-center justify-between">
//       <p>
//         <span class="text-3xl font-bold text-slate-900">$449</span>
      
//       </p>
      
//     </div>
//     <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//       {/* <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg> */}
//       View</a
//     >
//   </div>
// </div>




      








      
//     </div>
//   );
// };

// export default ProductList;
