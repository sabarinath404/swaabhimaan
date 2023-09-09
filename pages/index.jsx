import Image from "next/image";
import { Inter } from "next/font/google";

import addUser from "../src/data";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../src/firebase";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
// import css from 'styles/global.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const scrollToCategory2 = () => {
    // Scroll to the Category 2 section when the button is clicked
    if (category2Ref.current) {
      category2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactInfo = {
    title: "Contact Us",
    email: {
      value: "milagreevents@gmail.com",
      link: "mailto:milagreevents@gmail.com",
    },
    phone: {
      value: ["+919995536675", "+918281975414"],
    },
    address: {
      value:
        "TC 13/1300(5), Near AJ Hall, Pothujanam Road, Kumarapuram, Trivandrum, Kerala - 695011",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8661448213875!2d76.9231975857174!3d8.512375075037816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf046cd86b3%3A0xc3460508b569a5f4!2sTC%2013%2C%201300%2C%20Kumarapuram%2C%20Thiruvananthapuram%2C%20Kerala%20695011!5e0!3m2!1sen!2sin!4v1692018229059!5m2!1sen!2sin",
    },
  };
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Alice&display=swap"
        rel="stylesheet"
      />
      <div
        className="myBackground  "
        style={{
          backgroundImage: "url('/image.png')",
          backgroundSize: "cover" /* Adjust the background size as needed */,
          backgroundPosition:
            "center center" /* Adjust the position as needed */,
          width: "100%",

          alignItems: "strech",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",

          /* Add more background-related styles here if needed */
        }}
      >
        <div className="w-full text-gray-700 border-t shadow-sm body-font  ">
          <div className="container flex flex-col flex-wrap items-center p-5 pl-12 pr-12 mx-auto md:flex-row lg:justify-around ">
            {/* <img src="/path/to/your/logo.png" alt="Logo" class="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain lg:mb-0" /> */}
            <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:m-auto ">
              <a
                href="#_"
                className="mr-5 font-medium hover:text-gray-900"
                target="_blank"
              >
                Home
              </a>
              <a
                href="#_"
                className="mr-5 font-medium hover:text-gray-900"
                target="_blank"
              >
                About
              </a>
              <a
                href="#_"
                className=" mr-5 font-medium hover:text-gray-900"
                target="_blank"
              >
                Contact
              </a>
              <a
                href="#_"
                className="font-medium hover:text-gray-900"
                target="_blank"
              >
                blog
              </a>
            </nav>
            {/* 
        <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center order-first mb-4 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0 h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" target="_blank">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
        */}
            <a
              href="
           "
              className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"
              target="_blank"
            >
              <img
                src="/swaabhimaan-logo.png"
                alt=""
                style={{ width: "150px", height: "90px" }}
              />
            </a>
            <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:m-auto">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-12 py-3 text-lg pt-3 rounded bg-custom-purple "
              >
                Read more
              </a>
            </div>
          </div>

          <hr className="custom-hr"></hr>
        </div>

        <div className=" text-black-100">
          <div className="container flex flex-col justify-center p-6 pl-4 mx-auto sm:py-12 lg:py-24  lg:flex-row lg:justify-evenly">
            <div className="flex flex-col justify-center p-6 pb-0  ml-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-cardo leading-none sm:text-6xl  first-letter:">
                {" "}
                Natural food products from swaabhimaan{" "}
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 font-alegreya-sc">
                {" "}
                Serve natural foods in your table live longer{" "}
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-12 py-3 text-lg font-semibold rounded bg-custom-purple "
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="/swaabhiman-headpage-photo.png"
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="">
          <h1 className="text-5xl font-alice leading-none sm:text-6xl">
            {" "}
            Our farm{" "}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            {" "}
            visit our farm where we prepare our medicine{" "}
          </p>
        </div>

        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2 relative"
              style={{
                backgroundImage:
                  "url('https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "4px",
              }}
            >
              <a
                href="#"
                className="absolute bottom-0 left-0 mb-2 ml-2 inline-flex items-center text-white hover:underline"
              >
                See our guideline
                <svg
                  className="w-3 h-3 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div
        className="myBackground mt-12 "
        style={{
          // backgroundImage: "url('/Untitled design.png')",
          backgroundColor: "#EAE7DD",
          backgroundSize: "cover" /* Adjust the background size as needed */,
          backgroundPosition:
            "center center" /* Adjust the position as needed */,
          width: "100%",

          alignItems: "strech",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <section className="">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="">
              <h1 className="text-5xl font-alice leading-none sm:text-6xl">
                {" "}
                Our products{" "}
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                {" "}
                explore the premium range of quality and natural food products
                from swaabhimaan{" "}
              </p>
            </div>
          </div>

          <div className="py-6 lg:justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:justify-center">
            <a href="/productDisplayPage?id=3kdGd3ucIcJx38hIzIxJ">
              <div className="mb-4 lg:mb-0 flex justify-center">
                <div className="card p-4 border shadow-md rounded-md">
                  <div className="image mb-2">
                  <img src="/swaabhiman-headpage-photo.png" class="" alt="FlowBite Logo" />
                  </div>
                  <span className="title text-lg font-semibold">
                    black rice
                  </span>
                  <span className="price mt-1 block text-gray-600">$100</span>
                </div>
              </div>
            </a>

              <a href="/productDisplayPage?id=3kdGd3ucIcJx38hIzIxJ">
              <div className="mb-4 lg:mb-0 flex justify-center">
                <div className="card p-4 border shadow-md rounded-md">
                  <div className="image mb-2">
                      <img src="/swaabhiman-headpage-photo.png" class="" alt="FlowBite Logo" />
                  </div>
                  <span className="title text-lg font-semibold">
                    Rakthashali
                  </span>
                  <span className="price mt-1 block text-gray-600">$100</span>
                </div>
              </div>
              </a>
              
              <a href="/productDisplayPage?id=3kdGd3ucIcJx38hIzIxJ">
              <div className="mb-4 lg:mb-0 flex justify-center">
                <div className="card p-4 border shadow-md rounded-md">
                  <div className="image mb-2">
                  <img src="/swaabhiman-headpage-photo.png" class="" alt="FlowBite Logo" />
                  </div>
                  <span className=" font-montserrat title text-lg ">
                  Geerakashala
                  </span>
                  <span className="price mt-1 block text-gray-600">$100</span>
                </div>
              </div>
              </a>
            </div>
          </div>
        </section>
        <div className=" lg:justify-center">
          <div class="flex flex-col justify-center items-center p-12">
            <a
              rel="noopener noreferrer"
              href="/productList"
              className="px-12 py-3 text-lg font-semibold rounded bg-custom-purple"
            >
              View all products
            </a>
          </div>
        </div>
      </div>

      {/* divvv */}
      <div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="">
            <h1 className="text-5xl font-alice leading-none sm:text-6xl">
              {" "}
              Product catagory{" "}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              {" "}
              explore the different range of products{" "}
            </p>
          </div>
        </div>
        <div className="  category-card-container pb-20 pl-8 pr-8">
          <a href="/productList#catagory2">
            <div className="category-card">
              <img
                className="w-10 h-10 rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3S1gRcz_ldMF8zCXnqIkJ6BjmwHIUzGwa_cd5NrteA&s"
                alt="Default avatar"
              />

              <h3 className="category-card__title">Title 1</h3>
              <p className="category-card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="category-card__date">April 15, 2022</div>
              <div className="category-card__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="15"
                  width="15"
                >
                  <path
                    fill="#fff"
                    d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                  ></path>
                </svg>
              </div>
            </div>
          </a>

          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3S1gRcz_ldMF8zCXnqIkJ6BjmwHIUzGwa_cd5NrteA&s"
              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 2</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="dhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3S1gRcz_ldMF8zCXnqIkJ6BjmwHIUzGwa_cd5NrteA&s"
              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 3</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_372X232_3X7._SY232_CB602731451_.jpg"
              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 4</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="category-card">
            {/* Card 2 content */}
            <img
              className="w-10 h-10 rounded"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3S1gRcz_ldMF8zCXnqIkJ6BjmwHIUzGwa_cd5NrteA&s"
              alt="Default avatar"
            />

            <h3 className="category-card__title">Title 5</h3>
            <p className="category-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="category-card__date">April 15, 2022</div>
            <div className="category-card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-skin">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="">
            <h1 className="text-5xl font-alice leading-none text-custom-color  sm:text-6xl">
              {" "}
              Our story{" "}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-custom-puruple">
              {" "}
              The journey of us{" "}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-2 md:w-1/2 p-4 m-2">
              <p className="font-alegreya-sc text-custom-puruple ">
                This is a paragraph in the first div. It should look big in
                width. This is a paragraph in the first div. It should look big
                in width. This is a paragraph in the first div. It should look
                big in width. This is a paragraph in the first div. It should
                look big in width. This is a paragraph in the first div. It
                should look big in width. This is a paragraph in the first div.
                It should look big in width. This is a paragraph in the first
                div. It should look big in width. This is a paragraph in the
                first div. It should look big in width. This is a paragraph in
                the first div. It should look big in width. This is a paragraph
                in the first div. It should look big in width.
              </p>
            </div>
            <div className="order-first md:order-none md:w-1/4 p-4 m-2">
  <div className="w-20 h-20 rounded-full mx-auto overflow-hidden">
    <img src="image-removebg-preview.png" class="h-20 mx-auto" alt="FlowBite Logo" />
  </div>
</div>
            <div className="flex-2 md:w-1/2 p-4 m-2">
              <p className="font-alegreya-sc  text-custom-puruple">
                This is a paragraph in the first div. It should look big in
                width. This is a paragraph in the first div. It should look big
                in width. This is a paragraph in the first div. It should look
                big in width. This is a paragraph in the first div. It should
                look big in width. This is a paragraph in the first div. It
                should look big in width. This is a paragraph in the first div.
                It should look big in width. This is a paragraph in the first
                div. It should look big in width. This is a paragraph in the
                first div. It should look big in width. This is a paragraph in
                the first div. It should look big in width. This is a paragraph
                in the first div. It should look big in width.
              </p>
            </div>
          </div>
        </div>

        <div className=" lg:justify-center">
          <div className="flex flex-col justify-center items-center p-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-12 py-3 text-lg  font-semibold rounded bg-custom-purple"
            >
              Read more
            </a>
          </div>
        </div>
      </div>


<div>

<div className="">
  
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
        <h1 className="text-5xl font-alice leading-none text-custom-color  sm:text-6xl pb-6">
              {" "}
              frequently asked questions{" "}
            </h1>
<div class="space-y-4">
  <details class="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 class="font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <svg
        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="mt-4 px-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>

  <details class="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 class="font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <svg
        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="mt-4 px-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>
</div>
</div>
</div>
</div>




      <div>
        <div className="p-2 sm:p-12 pb-6 sm:pb-12 pt-6 sm:pt-12 ">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-cardo leading-none sm:text-6xl  first-letter: pd-6">
              <span className="hover:text-tertiary cursor-responsive-hidden">
                {contactInfo.title || "Contact Us"}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              <div>
                <ul className="space-y-6 text-secondary">
                  {contactInfo?.email && (
                    <li className="flex items-start">
                      <span className="text-primary w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 hover:bg-tertiary cursor-responsive-hidden">
                        <FiMail className="h-5 w-5 cursor-responsive-hidden" />
                      </span>
                      <div>
                        <p className="text-lg font-semibold cursor-responsive-hidden text-primary">
                          {contactInfo.email.title || "E-mail"}
                        </p>
                        <a
                          href={contactInfo.email.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg hover:underline cursor-responsive-hidden"
                        >
                          {contactInfo.email.value}
                        </a>
                      </div>
                    </li>
                  )}
                  {contactInfo?.phone && (
                    <li className="flex items-start">
                      <span className="text-primary w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 hover:bg-tertiary cursor-responsive-hidden">
                        <FiPhone className="h-5 w-5 cursor-responsive-hidden" />
                      </span>
                      <div>
                        <p className="text-lg font-semibold cursor-responsive-hidden text-primary">
                          {contactInfo.phone.title || "Phone"}
                        </p>
                        {contactInfo.phone.value.map((phoneNumber, index) => (
                          <p
                            key={index}
                            className="text-lg cursor-responsive-hidden"
                          >
                            {phoneNumber}
                          </p>
                        ))}
                      </div>
                    </li>
                  )}
                  {contactInfo?.address && (
                    <li className="flex items-start">
                      <span className="text-primary w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 hover:bg-tertiary cursor-responsive-hidden">
                        <FiMapPin className="h-5 w-5 cursor-responsive-hidden" />
                      </span>
                      <div>
                        <p className="text-lg font-semibold cursor-responsive-hidden text-primary">
                          {contactInfo.address.title || "Address"}
                        </p>
                        <p className="text-lg w-64 cursor-responsive-hidden">
                          {contactInfo.address.value}
                        </p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              {contactInfo?.address && (
                <div className="pt-4 md:pt-0">
                  <iframe
                    title="Google Maps"
                    className="w-full h-80 rounded-lg shadow-md opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-responsive-hidden"
                    src={contactInfo.address.src}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-custom-purple ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
              {/* <img src="/next.svg" class="h-8 mr-3" alt="FlowBite Logo" /> */}
                <span class="self-center text-2xl  whitespace-nowrap text-custom-color font-alegreya-sc ">
                  SWAABHIMAAAN
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-custom-color">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://flowbite.com/"
                      class="hover:underline text-custom-color"
                    >
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      class="hover:underline text-custom-color"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-custom-color text-custom-color">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline text-custom-color "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline text-custom-color"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-custom-color">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" class="hover:underline text-custom-color">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline text-custom-color">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto bg-blue-500 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center text-custom-color">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline ">
                swaabhimaan
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
