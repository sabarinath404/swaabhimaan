// import React from 'react';
// import fetchProductById from '../src/fetchProductById'; // Update the import path as needed

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const ProductDisplayPage = () => {

//   const router = useRouter();
//   const { id } = router.query; // To get the productId from the query string

//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details using productId
//     async function fetchProduct() {
//       try {
//         const productData = await fetchProductById(id);
       
//         setProduct(JSON.parse(productData)); 
//         // Parse the JSON data and set it to state
//         console.log(productData)
//       } catch (error) {
//         console.error('Error fetching product:', error);
//         // Handle the error, e.g., show an error message to the user
//       }
//     }

//     fetchProduct();
//   }, [id]);




//   return (
//     <div>
//       {/* Navigation */}
//       <nav className="bg-light">
//         <div className="container mx-auto px-4 py-4">
//           <a className="text-xl font-bold text-gray-800" href="#!">Start Bootstrap</a>
//           <button className="md:hidden block ml-auto text-gray-600 focus:outline-none">
//             <i className="bi bi-list"></i>
//           </button>
//           <div className="hidden md:flex space-x-4 ml-auto">
//             <a className="text-gray-600 hover:text-gray-800" href="#!">Home</a>
//             <a className="text-gray-600 hover:text-gray-800" href="#!">About</a>
//             <div className="relative group">
//               <a className="text-gray-600 group-hover:text-gray-800" href="#!">Shop</a>
//               <div className="hidden absolute bg-white w-40 mt-2 space-y-2 py-2 rounded-lg shadow-lg group-hover:block">
//                 <a className="block px-4 py-2" href="#!">All Products</a>
//                 <hr className="my-1" />
//                 <a className="block px-4 py-2" href="#!">Popular Items</a>
//                 <a className="block px-4 py-2" href="#!">New Arrivals</a>
//               </div>
//             </div>
//           </div>
//           <button className="md:hidden ml-auto">
//             <i className="bi bi-cart-fill"></i>
//             <span className="bg-dark text-white rounded-full px-2 py-1 ml-1">0</span>
//           </button>
//         </div>
//       </nav>

//       {/* Product section */}
//       <section className="py-5">
//       {product ? ( // Check if product is available
//         <div className="container mx-auto px-4 py-5">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2">
//               <img className="w-full mb-5 md:mb-0" src={`/images/${product.imageName}`} alt="..." />
//             </div>
//             <div className="md:w-1/2 pl-6">
//               <div className="mb-1">{product.category}</div>
//               <h1 className="text-3xl font-bold">{product.productName}</h1>
//               <div className="text-xl mb-5">
//                 <span className="line-through">${product.price+10}</span>
//                 <span className="ml-1">${product.price}</span>
//               </div>
//               <ul>
//             {product.features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>
//               <p className="text-lg">{product.description}</p>
//               <div className="flex items-center">
                
//                <button className="bg-dark py-2 px-4 rounded-lg">
//                   <i className="bi bi-cart-fill mr-1"></i>
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         ) : (
//           <p>Loading product...</p> // Display a loading message when product is null
//         )}
//       </section>

//       {/* Related items section */}
//       <section className="py-5 bg-gray-100">
//         <div className="container mx-auto px-4 py-5">
//           <h2 className="text-3xl font-bold mb-4">Related products</h2>
//           <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//               <div className="text-center mt-2">
//                 <h5 className="font-bold">Fancy Product</h5>
//                 $40.00 - $80.00
//               </div>
//               <div className="text-center mt-4">
//                 <a className="bg-dark text-white py-2 px-4 rounded-lg" href="#!">View options</a>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <div className="bg-dark text-white absolute top-0 right-0 py-1 px-2 rounded-tl-lg">Sale</div>
//               <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//               <div className="text-center mt-2">
//                 <h5 className="font-bold">Special Item</h5>
//                 <div className="flex justify-center text-sm text-yellow-500">
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                 </div>
//                 <span className="line-through">$20.00</span>
//                 $18.00
//               </div>
//               <div className="text-center mt-4">
//                 <button className="bg-dark text-white py-2 px-4 rounded-lg">Add to cart</button>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <div className="bg-dark text-white absolute top-0 right-0 py-1 px-2 rounded-tl-lg">Sale</div>
//               <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//               <div className="text-center mt-2">
//                 <h5 className="font-bold">Sale Item</h5>
//                 <span className="line-through">$50.00</span>
//                 $25.00
//               </div>
//               <div className="text-center mt-4">
//                 <button className="bg-dark text-white py-2 px-4 rounded-lg">Add to cart</button>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//               <div className="text-center mt-2">
//                 <h5 className="font-bold">Popular Item</h5>
//                 <div className="flex justify-center text-sm text-yellow-500">
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                   <i className="bi bi-star-fill"></i>
//                 </div>
//                 $40.00
//               </div>
//               <div className="text-center mt-4">
//                 <button className="bg-dark text-white py-2 px-4 rounded-lg">Add to cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-dark py-5">
//         <div className="container mx-auto">
//           <p className="text-white text-center">Copyright &copy; Your Website 2023</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default ProductDisplayPage;

import React from 'react';
import fetchProductById from '../src/fetchProductById'; // Update the import path as needed
import { fetchProducts } from '../src/fetchData';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductDisplayPage = () => {

  const router = useRouter();
  const { id } = router.query; // To get the productId from the query string

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); // Fix the variable name here

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(); // Use the correct function from your src/fetchData file
        setRelatedProducts(fetchedProducts); // Fix the variable name here
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    getProducts();
  }, []);

  useEffect(() => {
    // Fetch product details using productId
    async function fetchProduct() {
      try {
        const productData = await fetchProductById(id);
        setProduct(JSON.parse(productData)); // Parse the JSON data and set it to state
        console.log(productData.category);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle the error, e.g., show an error message to the user
      }
    }

    fetchProduct();
  }, [id]);


  


  return (
    <div>
      
      {/* Navigation */}
      {/* <nav className="bg-light">
        <div className="container mx-auto px-4 py-4">
          <a className="text-xl font-bold text-gray-800" href="#!">swaabhimaan</a>
          <button className="md:hidden block ml-auto text-gray-600 focus:outline-none">
            <i className="bi bi-list"></i>
          </button>
          <div className="hidden md:flex space-x-4 ml-auto">
            <a className="text-gray-600 hover:text-gray-800" href="#!">Home</a>
            <a className="text-gray-600 hover:text-gray-800" href="#!">About</a>
            <div className="relative group">
              <a className="text-gray-600 group-hover:text-gray-800" href="#!">Shop</a>
              <div className="hidden absolute bg-white w-40 mt-2 space-y-2 py-2 rounded-lg shadow-lg group-hover:block">
                <a className="block px-4 py-2" href="#!">All Products</a>
                <hr className="my-1" />
                <a className="block px-4 py-2" href="#!">Popular Items</a>
                <a className="block px-4 py-2" href="#!">New Arrivals</a>
              </div>
            </div>
          </div>
          <button className="md:hidden ml-auto">
            <i className="bi bi-cart-fill"></i>
            <span className="bg-dark text-white rounded-full px-2 py-1 ml-1">0</span>
          </button>
        </div>
      </nav> */}
      <nav class="flex items-center justify-between flex-wrap bg-custom-purple  p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-cardo text-3xl text-custom-color  tracking-tight">
            swaabhimaan
          </span>
        </div>
        <div class="block hidden">
          <button class="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-custom-color hover:text-white mr-4"
            >
              home
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-custom-color hover:text-white mr-4"
            >
              about
            </a>
            <a
              href="#responsive-header"
              class="block  text-custom-color mt-4 lg:inline-block lg:mt-0  hover:text-white"
            >
              contact us
            </a>
          </div>
          <div>
            <a
              href="/"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              back
            </a>
          </div>
        </div>
      </nav>

      {/* Product section */}
      <section className="py-5">
      {product ? ( // Check if product is available
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/2">
              <img className="w-full mb-5 md:mb-0" src={`/images/${product.imageName}`} alt="..." />
            </div>
            <div className="md:w-1/2 pl-6 ">
              <div className="mb-1 text-custom-color">{product.category}</div>
              <h1 className="text-3xl font-cardo">{product.productName}</h1>
              <div className="text-xl mb-5">
                <span className="line-through">${product.price+10}</span>
                <span className="ml-1">${product.price}</span>
              </div>
              <h1 className='pt-6 pb-4 text-xl font-alegreya-sc text-custom-puruple'>Features</h1>
              <ul>

            {product.features.map((feature, index) => (
              
              <li className='font-alegreya-sc' key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex pt-4 items-center">
                
               <button className="bg-black  text-white item-center py-2 px-4 rounded-lg">
                  <i className="bi bi-cart-fill mr-1"></i>
                  Buy through whatsapp
                </button>
              </div>
              <h1 className='pt-6 text-xl font-alegreya-sc text-custom-puruple'>Description</h1>
              <p className="text-lg pt-4 font-alegreya-sc">{product.description}</p>
              
            </div>
          </div>
        </div>
        ) : (
          <p>Loading product...</p> // Display a loading message when product is null
        )}
      </section>

      <section className="py-5 bg-gray-100">
  <div className="container mx-auto px-4 py-5">
    <h2 className="text-3xl font-bold mb-4">Related products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {relatedProducts
        .filter((productRel) => product?.category && productRel.category === product.category && productRel.productId !== id) // Filter related products by the same category and exclude the main product
        .slice(0, 4) // Limit the displayed related products to 4
        .map((product, productIndex) => (
          <div key={productIndex} className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-full" src={`/images/${product.imageName}`} alt={product.productName} />
            <div className="text-center mt-2">
              <h5 className="font-bold">{product.productName}</h5>
              ${product.price}
            </div>
            <div className="text-center mt-4">
              <a className="bg-black text-white py-2 px-4 rounded-lg" href={`/productDisplayPage?id=${product.productId}`}>
                View 
              </a>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-dark py-5">
        <div className="container mx-auto">
          <p className="text-white text-center">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default ProductDisplayPage;
