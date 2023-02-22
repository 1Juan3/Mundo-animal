import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
