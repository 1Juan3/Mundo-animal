"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const product_1 = require("../controllers/product");
const usuarios_1 = require("../controllers/usuarios");
const record_veterinarian_1 = require("../controllers/record_veterinarian");
const form_veterinaria_1 = require("../controllers/form_veterinaria");
const form_domiciliario_1 = require("../controllers/form_domiciliario");
const client_1 = require("../controllers/client");
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
//rutas de productos
router.get("/products", product_1.getAllProducts);
router.get("/products/:id", product_1.getProduct);
router.post("/products", upload.single("image"), product_1.createProduct);
router.put("/products/:id", upload.single("image"), product_1.updateProduct);
router.delete("/products/:id", product_1.deleteProduct);
//rutas usuario
router.post("/create-users", usuarios_1.newUser);
router.post("/login", usuarios_1.loginUser);
//rurtas para ell form de veterinarios 
router.post("/record", upload.single("hoja_vida"), record_veterinarian_1.createdRecord);
router.get("/records", record_veterinarian_1.getAllRecords);
router.get("/record:id", record_veterinarian_1.getRecord);
router.delete("/record/:id", record_veterinarian_1.deletedRecord);
//rutas form veterinaria
router.post("/formveterinaria", form_veterinaria_1.newForm);
router.get("/formveterinaria/:id", form_veterinaria_1.getForm);
router.get("/formveterinaria", form_veterinaria_1.getAllForms);
router.delete("/formveterinaria/:id", form_veterinaria_1.deleteForm);
///rutas para el form domiciliario 
router.post("/formdomiciliario", upload.single("hoja_vida"), form_domiciliario_1.createdFormDomiciliario);
router.get("/formdomiciliario", form_domiciliario_1.getAllFormsDomiciliario);
router.get("/formdomiciliario:id", form_domiciliario_1.getFormDomiciliario);
router.delete("/formdomiciliario/:id", form_domiciliario_1.deletedFormDomiciliario);
/// rutas para el cliente 
router.post("/register", client_1.newClient);
exports.default = router;
