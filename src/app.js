import express from "express"

const app = express()

//middlewares
app.use(express.json())

//ruta base
app.get("/", (req, res) => {
    res.json({ message: "API funcionando" })
})

export default app;