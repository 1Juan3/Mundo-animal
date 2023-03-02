import { Router } from "express";
import multer from "multer";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/product";
import { loginUser, newUser } from "../controllers/usuarios";
import { createdRecord, getAllRecords, getRecord, deletedRecord } from "../controllers/record_veterinarian";
import { newForm,deleteForm,getAllForms,getForm } from "../controllers/form_veterinaria";
import { createdFormDomiciliario,deletedFormDomiciliario,getAllFormsDomiciliario,getFormDomiciliario} from "../controllers/form_domiciliario";
import { newClient } from "../controllers/client";

const router = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName =
      file.fieldname +
      "-" +
      uniqueSuffix +
      "." +
      file.originalname.split(".").pop();

    cb(null, fileName);
  },
});

const upload = multer({ storage });
//rutas de productos
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.post("/products", upload.single("image"), createProduct);
router.put("/products/:id", upload.single("image"), updateProduct);
router.delete("/products/:id", deleteProduct);
//rutas usuario
router.post("/create-users", newUser);
router.post("/login", loginUser);
//rurtas para ell form de veterinarios 

router.post("/record", upload.single("hoja_vida"), createdRecord);
router.get("/records", getAllRecords);
router.get("/record:id", getRecord)
router.delete("/record/:id", deletedRecord)

//rutas form veterinaria
router.post("/formveterinaria", newForm);
router.get("/formveterinaria/:id", getForm);
router.get("/formveterinaria", getAllForms);
router.delete("/formveterinaria/:id", deleteForm)
///rutas para el form domiciliario 

router.post("/formdomiciliario", upload.single("hoja_vida"), createdFormDomiciliario);
router.get("/formdomiciliario", getAllFormsDomiciliario);
router.get("/formdomiciliario:id", getFormDomiciliario)
router.delete("/formdomiciliario/:id", deletedFormDomiciliario)

/// rutas para el cliente 
router.post("/register", newClient);
export default router;
