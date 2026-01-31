# 🧩 NovaStore API

API REST desarrollada con Node.js, Express y PostgreSQL para la gestión de productos de un e-commerce.

Este proyecto forma parte de un sistema full stack y provee endpoints para crear, leer, actualizar y eliminar productos.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg (node-postgres)
- dotenv
- Git & GitHub

---

## 📦 Estructura del proyecto

```bash
backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── routes/
│   │   └── product.routes.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔌 Endpoints disponibles
### Productos

| Método | Ruta | Descripción |
| :--- | :---: | ---: |
| GET | /api/products | Obtener todos los productos |
| GET | /api/products/:id | Obtener producto por ID |
| POST | /api/products | Crear un producto |
| PUT | /api/products/:id | Actualizar un producto |
| DELETE | /api/products/:id | Eliminar un producto |

---

## 🧪 Ejemplo de body (POST / PUT)

```json
{
  "name": "Camisa Oxford",
  "description": "Camisa de algodón manga larga",
  "price": 24900,
  "category": "camisas",
  "image": "https://..."
}
```

---

## ⚙️ Cómo ejecutar el proyecto en local

1. Clonar el repositorio

```bash
git clone https://github.com/cristiangc92/novastore-backend
cd backend
```

2. Instalar dependencias

```bash
npm install
```

3. Crear archivo .env

DATABASE_URL=postgresql://usuario:password@localhost:5432/novastore_db
PORT=3000

4. Ejecutar en modo desarrollo

```bash
npm run dev
```

---

👨‍💻 Autor
Cristian Gabriel Cacciolatti
📧 cristiangc92@gmail.com
💻 https://portfolio-cristian-cacciolatti.vercel.app/