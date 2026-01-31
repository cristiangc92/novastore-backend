import express from "express"
import productRoutes from "./routes/product.routes.js"

const app = express()

//middlewares
app.use(express.json())

//rutas
app.use("/api", productRoutes)

export default app;