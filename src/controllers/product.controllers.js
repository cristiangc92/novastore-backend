import pool from "../config/db.js"

export const getAllProducts = async (req, res) => {
    try {
    console.log('GET /products - inicio')

    const result = await pool.query('SELECT * FROM products')

    console.log('Query OK, rows:', result.rows)

    return res.status(200).json(result.rows)
  } catch (error) {
    console.error('ERROR REAL:', error)
    return res.status(500).json({ error: 'Error al obtener productos' })
  }
    // try {
    //     const result = await pool.query(
    //         "SELECT * FROM products ORDER BY id ASC"
    //     )
    //     res.json(result.rows)
    // } catch (error) {
    //     res.status(500).json({ error: "Error al obtener productos" })
    // }
}

export const getProductById = async (req, res) => {
    const { id } = req.params

    try {
        const result = await pool.query(
            "SELECT * FROM products WHERE id = $1",[id] //$1 → query parametrizada (evita SQL injection)
        )

        if(result.rows.length === 0){
            return res.status(404).json({
                error: "Producto no encontrado"
            })
        }

        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener el producto"
        })        
    }
}

export const createProduct = async (req, res) => {
    const { name, description, price, category, image } = req.body

    //validacion básica
    if(!name || !price){
        return res.status(400).json({
            error: "El nombre y el precio son obliatorios"
        })
    }

    try {
        const result = await pool.query(
            `INSERT INTO products (name, description, price, category, image)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`, [name, description, price, category, image]
            //RETURNING * → devuelve el producto creado
        )

        res.status(201).json(result.rows[0]) //Status 201 → creado correctamente
    } catch (error) {
        res.status(500).json({
            error: "Error al crear el producto"
        })        
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, description, price, category, image } = req.body

    if(!name || !price){
        return res.status(400).json({
            error: "El nombre y del precio son obligatorios"
        })
    }

    try {
        const result = await pool.query(
            `UPDATE products
            SET name = $1,
            description = $2,
            price = $3,
            category = $4,
            image = $5
            WHERE id = $6
            RETURNING *`, [name, description, price, category, image, id]
        )

        if(result.rows.length === 0){
            return res.status(404).json({
                error: "Producto no encontrado"
            })
        }

        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar el producto"
        })        
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const result = await pool.query(
            "DELETE FROM products WHERE id = $1 RETURNING *", [id]
        )

        if(result.rows.length === 0){
            return res.status(404).json({
                error: "Producto no encontrado"
            })
        }

        res.status(204).send()
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar el producto"
        })
    }
}