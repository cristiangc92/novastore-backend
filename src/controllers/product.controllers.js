import pool from "../config/db.js"

export const getAllProducts = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM products ORDER BY id ASC"
        )
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" })
    }
}