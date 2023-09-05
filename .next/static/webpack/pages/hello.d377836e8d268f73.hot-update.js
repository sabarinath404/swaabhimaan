"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/hello",{

/***/ "./pages/hello.jsx":
/*!*************************!*\
  !*** ./pages/hello.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _src_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/data */ \"./src/data.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserInputForm = ()=>{\n    _s();\n    const [inputData, setInputData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        productName: \"\",\n        productNo: 0,\n        price: 0,\n        description: \"\",\n        features: \"\",\n        category: \"\"\n    });\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setInputData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleImageSelect = (event)=>{\n        const imageFile = event.target.files[0];\n        setSelectedImage(imageFile);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        let newImageName = \"\";\n        if (selectedImage) {\n            try {\n                const formData = new FormData();\n                formData.append(\"myImage\", selectedImage);\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/image\", formData);\n                newImageName = selectedImage.name;\n            } catch (error) {\n                console.error(\"Error uploading image:\", error);\n            }\n        }\n        const featuresArray = inputData.features.split(\",\").map((feature)=>feature.trim());\n        const inputDataWithImage = {\n            ...inputData,\n            imageName: newImageName,\n            productNo: parseInt(inputData.productNo),\n            price: parseInt(inputData.price),\n            features: featuresArray\n        };\n        (0,_src_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(inputDataWithImage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                encType: \"multipart/form-data\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"productName\",\n                                children: \"Product Name: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"productName\",\n                                value: inputData.productName || \"\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"productNo\",\n                                children: \"Product No: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"productNo\",\n                                value: inputData.productNo || \"\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"price\",\n                                children: \"Price: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"price\",\n                                value: inputData.price || \"\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"description\",\n                                children: \"Description: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"description\",\n                                value: inputData.description || \"\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"features\",\n                                children: \"Features: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"features\",\n                                value: inputData.features || \"\",\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"category\",\n                                children: \"Category: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"category\",\n                                value: inputData.category,\n                                onChange: handleInputChange,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select a category\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Category 1\",\n                                        children: \"Category 1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Category 2\",\n                                        children: \"Category 2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Category 3\",\n                                        children: \"Category 3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Category 4\",\n                                        children: \"Category 4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"Category 5\",\n                                        children: \"Category 5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"image\",\n                                children: \"Image: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"image/*\",\n                                onChange: handleImageSelect\n                            }, void 0, false, {\n                                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Input Object:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: JSON.stringify(inputData, null, 2)\n                    }, void 0, false, {\n                        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sabarinath404/swaabhimaan/pages/hello.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserInputForm, \"sPaFpEoKOPd6rkwhXXEv31rhKGE=\");\n_c = UserInputForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserInputForm);\nvar _c;\n$RefreshReg$(_c, \"UserInputForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDMkI7OzBDQUNDLDhEQUFDSTtnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0s7Z0NBQ0NuQyxNQUFLO2dDQUNMQyxPQUFPYixVQUFVTyxRQUFRO2dDQUN6QnNDLFVBQVVuQzs7a0RBRVYsOERBQUNzQzt3Q0FBT25DLE9BQU07a0RBQUc7Ozs7OztrREFDakIsOERBQUNtQzt3Q0FBT25DLE9BQU07a0RBQWE7Ozs7OztrREFDM0IsOERBQUNtQzt3Q0FBT25DLE9BQU07a0RBQWE7Ozs7OztrREFDM0IsOERBQUNtQzt3Q0FBT25DLE9BQU07a0RBQWE7Ozs7OztrREFDM0IsOERBQUNtQzt3Q0FBT25DLE9BQU07a0RBQWE7Ozs7OztrREFDM0IsOERBQUNtQzt3Q0FBT25DLE9BQU07a0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHL0IsOERBQUN3Qjs7MENBQ0MsOERBQUNJO2dDQUFNQyxTQUFROzBDQUFROzs7Ozs7MENBQ3ZCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0ssUUFBTztnQ0FBVUosVUFBVTdCOzs7Ozs7Ozs7Ozs7a0NBRWhELDhEQUFDa0M7d0JBQU9OLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNQOztrQ0FDQyw4REFBQ2M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQUtDLEtBQUtDLFNBQVMsQ0FBQ3RELFdBQVcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO0dBaklNRDtLQUFBQTtBQW1JTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9oZWxsby5qc3g/YTc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGFkZFVzZXIgZnJvbSAnLi4vc3JjL2RhdGEnO1xuXG5jb25zdCBVc2VySW5wdXRGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbaW5wdXREYXRhLCBzZXRJbnB1dERhdGFdID0gdXNlU3RhdGUoe1xuICAgIHByb2R1Y3ROYW1lOiAnJyxcbiAgICBwcm9kdWN0Tm86IDAsXG4gICAgcHJpY2U6IDAsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGZlYXR1cmVzOiAnJyxcbiAgICBjYXRlZ29yeTogJycsIC8vIEFkZCBjYXRlZ29yeSBmaWVsZCB0byBzdGF0ZVxuICB9KTtcblxuICBjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRJbnB1dERhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbWFnZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGltYWdlRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBzZXRTZWxlY3RlZEltYWdlKGltYWdlRmlsZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBuZXdJbWFnZU5hbWUgPSAnJztcbiAgICBpZiAoc2VsZWN0ZWRJbWFnZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdteUltYWdlJywgc2VsZWN0ZWRJbWFnZSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9pbWFnZScsIGZvcm1EYXRhKTtcbiAgICAgICAgbmV3SW1hZ2VOYW1lID0gc2VsZWN0ZWRJbWFnZS5uYW1lO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGltYWdlOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmZWF0dXJlc0FycmF5ID0gaW5wdXREYXRhLmZlYXR1cmVzLnNwbGl0KCcsJykubWFwKChmZWF0dXJlKSA9PiBmZWF0dXJlLnRyaW0oKSk7XG5cbiAgICBjb25zdCBpbnB1dERhdGFXaXRoSW1hZ2UgPSB7XG4gICAgICAuLi5pbnB1dERhdGEsXG4gICAgICBpbWFnZU5hbWU6IG5ld0ltYWdlTmFtZSxcbiAgICAgIHByb2R1Y3RObzogcGFyc2VJbnQoaW5wdXREYXRhLnByb2R1Y3RObyksXG4gICAgICBwcmljZTogcGFyc2VJbnQoaW5wdXREYXRhLnByaWNlKSxcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc0FycmF5LFxuICAgIH07XG4gICAgYWRkVXNlcihpbnB1dERhdGFXaXRoSW1hZ2UpO1xuICB9O1xuXG5cblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb2R1Y3ROYW1lXCI+UHJvZHVjdCBOYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInByb2R1Y3ROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dERhdGEucHJvZHVjdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcm9kdWN0Tm9cIj5Qcm9kdWN0IE5vOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInByb2R1Y3ROb1wiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXREYXRhLnByb2R1Y3RObyB8fCAnJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+UHJpY2U6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXREYXRhLnByaWNlIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjogPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXREYXRhLmRlc2NyaXB0aW9uIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmVhdHVyZXNcIj5GZWF0dXJlczogPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIG5hbWU9XCJmZWF0dXJlc1wiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXREYXRhLmZlYXR1cmVzIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5DYXRlZ29yeTogPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0RGF0YS5jYXRlZ29yeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgY2F0ZWdvcnk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yeSAxXCI+Q2F0ZWdvcnkgMTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNhdGVnb3J5IDJcIj5DYXRlZ29yeSAyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2F0ZWdvcnkgM1wiPkNhdGVnb3J5IDM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yeSA0XCI+Q2F0ZWdvcnkgNDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNhdGVnb3J5IDVcIj5DYXRlZ29yeSA1PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlU2VsZWN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5JbnB1dCBPYmplY3Q6PC9oMj5cbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoaW5wdXREYXRhLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0Rm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJhZGRVc2VyIiwiVXNlcklucHV0Rm9ybSIsImlucHV0RGF0YSIsInNldElucHV0RGF0YSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdE5vIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImZlYXR1cmVzIiwiY2F0ZWdvcnkiLCJzZWxlY3RlZEltYWdlIiwic2V0U2VsZWN0ZWRJbWFnZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsImhhbmRsZUltYWdlU2VsZWN0IiwiaW1hZ2VGaWxlIiwiZmlsZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0ltYWdlTmFtZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJkYXRhIiwicG9zdCIsImVycm9yIiwiY29uc29sZSIsImZlYXR1cmVzQXJyYXkiLCJzcGxpdCIsIm1hcCIsImZlYXR1cmUiLCJ0cmltIiwiaW5wdXREYXRhV2l0aEltYWdlIiwiaW1hZ2VOYW1lIiwicGFyc2VJbnQiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJlbmNUeXBlIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvbiIsImFjY2VwdCIsImJ1dHRvbiIsImgyIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/hello.jsx\n"));

/***/ })

});