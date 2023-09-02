exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 5879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function App({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 8002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// addUser.js

 // Make sure db is correctly initialized
const addUser = async (user)=>{
    try {
        const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "users"); // Change 'products' to 'users' or the correct collection name
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(usersCollection, user);
        console.log("Document written with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addUser); // const fetchUsers = async () => {
 //   try {
 // const fetchUsers = async () => {
 //   try {
 //     const querySnapshot = await getDocs(collection(db, 'users'));
 //     querySnapshot.forEach((doc) => {
 //       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
 //     });
 //   } catch (error) {
 //     console.error('Error fetching documents:', error);
 //   }
 // };
 // const updateDocument = async () => {
 //   const userDocRef = doc(db, 'users', 'documentId'); // Replace 'documentId' with the actual document ID
 //   const newData = {
 //     first: 'Updated First Name',
 //     last: 'Updated Last Name',
 //     born: 2000,
 //     // Add other fields you want to update
 //   };
 //   try {
 //     await updateDoc(userDocRef, newData);
 //     console.log('Document updated successfully.');
 //   } catch (error) {
 //     console.error('Error updating document:', error);
 //   }
 // };
 // updateDocument();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7P1C2vM28Rb7OGUpFciP4Ls2_6p7If4U",
    authDomain: "swaabhimaan-8cf83.firebaseapp.com",
    projectId: "swaabhimaan-8cf83",
    storageBucket: "swaabhimaan-8cf83.appspot.com",
    messagingSenderId: "969114481177",
    appId: "1:969114481177:web:9882023700cda36e1cb088",
    measurementId: "G-63LN769Y44"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
// const storage = getStorage(app);

// Initialize Firebase analytics only if window is defined (client side)
console.log("hello the firebase is connected");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;