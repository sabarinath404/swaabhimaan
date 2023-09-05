"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/image";
exports.ids = ["pages/api/image"];
exports.modules = {

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/image.jsx":
/*!*****************************!*\
  !*** ./pages/api/image.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_1__]);\nformidable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst readFile = (req, saveLocally)=>{\n    const options = {};\n    if (saveLocally) {\n        options.uploadDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"/public/images\");\n        options.filename = (name, ext, path, form)=>{\n            return path.originalFilename;\n        };\n    }\n    options.maxFileSize = 4000 * 1024 * 1024;\n    const form = (0,formidable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options);\n    return new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n};\nconst handler = async (req, res)=>{\n    try {\n        await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().readdir(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd() + \"/public\", \"/images\"));\n    } catch (error) {\n        await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().mkdir(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd() + \"/public\", \"/images\"));\n    }\n    await readFile(req, true);\n    res.json({\n        done: \"ok\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNGO0FBQ1o7QUFDSztBQUV0QixNQUFNSSxTQUFTO0lBQ3BCQyxLQUFLO1FBQ0hDLFlBQVk7SUFDZDtBQUNGLEVBQUU7QUFFRixNQUFNQyxXQUFXLENBQ2ZDLEtBQ0FDO0lBRUEsTUFBTUMsVUFBVSxDQUFDO0lBQ2pCLElBQUlELGFBQWE7UUFDZkMsUUFBUUMsU0FBUyxHQUFHVCxnREFBUyxDQUFDVyxRQUFRQyxHQUFHLElBQUk7UUFDN0NKLFFBQVFLLFFBQVEsR0FBRyxDQUFDQyxNQUFNQyxLQUFLZixNQUFNZ0I7WUFDbkMsT0FBT2hCLEtBQUtpQixnQkFBZ0I7UUFDOUI7SUFDRjtJQUNBVCxRQUFRVSxXQUFXLEdBQUcsT0FBTyxPQUFPO0lBQ3BDLE1BQU1GLE9BQU9qQixzREFBVUEsQ0FBQ1M7SUFDeEIsT0FBTyxJQUFJVyxRQUFRLENBQUNDLFNBQVNDO1FBQzNCTCxLQUFLTSxLQUFLLENBQUNoQixLQUFLLENBQUNpQixLQUFLQyxRQUFRQztZQUM1QixJQUFJRixLQUFLRixPQUFPRTtZQUNoQkgsUUFBUTtnQkFBRUk7Z0JBQVFDO1lBQU07UUFDMUI7SUFDRjtBQUNGO0FBRUEsTUFBTUMsVUFBVSxPQUFPcEIsS0FBS3FCO0lBQzFCLElBQUk7UUFDRixNQUFNMUIsMERBQVUsQ0FBQ0QsZ0RBQVMsQ0FBQ1csUUFBUUMsR0FBRyxLQUFLLFdBQVc7SUFDeEQsRUFBRSxPQUFPaUIsT0FBTztRQUNkLE1BQU01Qix3REFBUSxDQUFDRCxnREFBUyxDQUFDVyxRQUFRQyxHQUFHLEtBQUssV0FBVztJQUN0RDtJQUNBLE1BQU1QLFNBQVNDLEtBQUs7SUFDcEJxQixJQUFJSSxJQUFJLENBQUM7UUFBRUMsTUFBTTtJQUFLO0FBQ3hCO0FBRUEsaUVBQWVOLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2FhYmhpbWFhbi8uL3BhZ2VzL2FwaS9pbWFnZS5qc3g/NTFmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZm9ybWlkYWJsZSBmcm9tIFwiZm9ybWlkYWJsZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCByZWFkRmlsZSA9IChcbiAgcmVxLFxuICBzYXZlTG9jYWxseVxuKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgaWYgKHNhdmVMb2NhbGx5KSB7XG4gICAgb3B0aW9ucy51cGxvYWREaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCIvcHVibGljL2ltYWdlc1wiKTtcbiAgICBvcHRpb25zLmZpbGVuYW1lID0gKG5hbWUsIGV4dCwgcGF0aCwgZm9ybSkgPT4ge1xuICAgICAgcmV0dXJuIHBhdGgub3JpZ2luYWxGaWxlbmFtZTtcbiAgICB9O1xuICB9XG4gIG9wdGlvbnMubWF4RmlsZVNpemUgPSA0MDAwICogMTAyNCAqIDEwMjQ7XG4gIGNvbnN0IGZvcm0gPSBmb3JtaWRhYmxlKG9wdGlvbnMpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgIHJlc29sdmUoeyBmaWVsZHMsIGZpbGVzIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBmcy5yZWFkZGlyKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpICsgXCIvcHVibGljXCIsIFwiL2ltYWdlc1wiKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYXdhaXQgZnMubWtkaXIocGF0aC5qb2luKHByb2Nlc3MuY3dkKCkgKyBcIi9wdWJsaWNcIiwgXCIvaW1hZ2VzXCIpKTtcbiAgfVxuICBhd2FpdCByZWFkRmlsZShyZXEsIHRydWUpO1xuICByZXMuanNvbih7IGRvbmU6IFwib2tcIiB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTmV4dEFwaUhhbmRsZXIiLCJmb3JtaWRhYmxlIiwicGF0aCIsImZzIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlYWRGaWxlIiwicmVxIiwic2F2ZUxvY2FsbHkiLCJvcHRpb25zIiwidXBsb2FkRGlyIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlbmFtZSIsIm5hbWUiLCJleHQiLCJmb3JtIiwib3JpZ2luYWxGaWxlbmFtZSIsIm1heEZpbGVTaXplIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiaGFuZGxlciIsInJlcyIsInJlYWRkaXIiLCJlcnJvciIsIm1rZGlyIiwianNvbiIsImRvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/image.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/image.jsx"));
module.exports = __webpack_exports__;

})();