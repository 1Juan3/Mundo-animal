"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const product_1 = require("../controllers/product");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileName = file.fieldname +
            "-" +
            uniqueSuffix +
            "." +
            file.originalname.split(".").pop();
        cb(null, fileName);
    },
});
const upload = (0, multer_1.default)({ storage });
router.get("/products", product_1.getAllProducts);
router.get("/products/:id", product_1.getProduct);
router.post("/products", upload.single("image"), product_1.createProduct);
router.put("/products/:id", upload.single("image"), product_1.updateProduct);
router.delete("/products/:id", product_1.deleteProduct);
router.post("/register", usuarios_1.newUser);
router.post("/login", usuarios_1.loginUser);
exports.default = router;
