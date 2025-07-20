import express from "express";
import { getDb } from "../db/database";
import { Database } from "sqlite";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API běží");
});

app.get("/products", async (_req, res) => {
  const db = await getDb();
  const products = await db.all("SELECT * FROM products");
  res.json(products);
});

app.post("/products", async (req, res) => {
  const { title, description, price } = req.body;

  if (!title || price == null) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const db = await getDb();
  await db.run(
    "INSERT INTO products (title, description, price) VALUES (?, ?, ?)",
    title,
    description,
    price
  );

  res.status(201).send({ success: true });
});

app.get("/add/products", async (req, res) => {
  try {
    const db = await getDb();
    const result = await addProducts(db);

    if (result.status === 201) {
      res.status(201).send({ success: true });
    }
  } catch (error) {
    console.error("Error while trying to add products", error);

    res.status(500).send({ success: false });
  }
});

app.listen(PORT, async () => {
  const db = await getDb();
  await db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL
  )
`);

  console.log(`Server běží na http://localhost:${PORT}`);
});

async function addProducts(db: Database): Promise<Response> {
  try {
    await db.run(`
    INSERT INTO products (title, description, price) VALUES
    ('Medová masáž', 'Medová masáž', 1500),
    ('Jiná masáž', 'Description', 1200)`);
    return new Response("Data created", { status: 201 });
  } catch (error) {
    console.error("Error while creating data", error);
    return new Response("Error occured", { status: 500 });
  }
}
