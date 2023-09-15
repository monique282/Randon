
import express, { json } from "express";
import "express-async-errors";
import personRouter from "@/routers/personRoutes";

//configuração da API
const app = express();

app.use(json());
app.use(personRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));