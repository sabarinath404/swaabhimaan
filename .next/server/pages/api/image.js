"use strict";
(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 3160:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3160);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6705);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_1__]);
formidable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const config = {
    api: {
        bodyParser: false
    }
};
const readFile = (req, saveLocally)=>{
    const options = {};
    if (saveLocally) {
        options.uploadDir = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "/public/images");
        options.filename = (name, ext, path, form)=>{
            return path.originalFilename;
        };
    }
    options.maxFileSize = 4000 * 1024 * 1024;
    const form = (0,formidable__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
    return new Promise((resolve, reject)=>{
        form.parse(req, (err, fields, files)=>{
            if (err) reject(err);
            resolve({
                fields,
                files
            });
        });
    });
};
const handler = async (req, res)=>{
    try {
        await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().readdir(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd() + "/public", "/images"));
    } catch (error) {
        await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().mkdir(path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd() + "/public", "/images"));
    }
    await readFile(req, true);
    res.json({
        done: "ok"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4354));
module.exports = __webpack_exports__;

})();