import React from 'react';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductDisplayPage = () => {
  const router = useRouter();
  const { id } = router.query; // To get the productId from the query string

  useEffect(() => {
    if (id) {
      console.log('Product ID:', id);
      // Send productId to the backend if needed
      // Example using fetch:
      // fetch(`/api/getProduct?id=${id}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     // Handle the response from the backend
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //   });
    }
  }, [id]);


// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const ProductDisplayPage = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get the product ID from the query string
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (id) {
//       // Make an API request to fetch the product data based on the product ID
//       fetch(`../src/fetchProductById?id=${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setProduct(data); // Update the product state with the fetched data
//         })
//         .catch((error) => {
//           console.error('Error--:', error);
//         });
//     }
//   }, [id]);


  return (
    <div>
      {/* Navigation */}
      <nav className="bg-light">
        <div className="container mx-auto px-4 py-4">
          <a className="text-xl font-bold text-gray-800" href="#!">Start Bootstrap</a>
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
      </nav>

      {/* Product section */}
      <section className="py-5">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <img className="w-full mb-5 md:mb-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." />
            </div>
            <div className="md:w-1/2 pl-6">
              <div className="mb-1">SKU: BST-498</div>
              <h1 className="text-3xl font-bold">Shop item template</h1>
              <div className="text-xl mb-5">
                <span className="line-through">$45.00</span>
                <span className="ml-1">$40.00</span>
              </div>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
              <div className="flex items-center">
                <input className="w-16 text-center mr-3" id="inputQuantity" type="number" value="1" />
                <button className="bg-dark text-white py-2 px-4 rounded-lg">
                  <i className="bi bi-cart-fill mr-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related items section */}
      <section className="py-5 bg-gray-100">
        <div className="container mx-auto px-4 py-5">
          <h2 className="text-3xl font-bold mb-4">Related products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="text-center mt-2">
                <h5 className="font-bold">Fancy Product</h5>
                $40.00 - $80.00
              </div>
              <div className="text-center mt-4">
                <a className="bg-dark text-white py-2 px-4 rounded-lg" href="#!">View options</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="bg-dark text-white absolute top-0 right-0 py-1 px-2 rounded-tl-lg">Sale</div>
              <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="text-center mt-2">
                <h5 className="font-bold">Special Item</h5>
                <div className="flex justify-center text-sm text-yellow-500">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <span className="line-through">$20.00</span>
                $18.00
              </div>
              <div className="text-center mt-4">
                <button className="bg-dark text-white py-2 px-4 rounded-lg">Add to cart</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="bg-dark text-white absolute top-0 right-0 py-1 px-2 rounded-tl-lg">Sale</div>
              <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="text-center mt-2">
                <h5 className="font-bold">Sale Item</h5>
                <span className="line-through">$50.00</span>
                $25.00
              </div>
              <div className="text-center mt-4">
                <button className="bg-dark text-white py-2 px-4 rounded-lg">Add to cart</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img className="w-full" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="text-center mt-2">
                <h5 className="font-bold">Popular Item</h5>
                <div className="flex justify-center text-sm text-yellow-500">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                $40.00
              </div>
              <div className="text-center mt-4">
                <button className="bg-dark text-white py-2 px-4 rounded-lg">Add to cart</button>
              </div>
            </div>
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
