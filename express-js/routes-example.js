const express = require("express");

const app = express();

// root route
app.get("/", (request, response) => {
  response.send("Home Page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Apple iPhone 12", price: 999.99, category: "Electronics" },
    { id: 2, name: "Samsung TV", price: 1299.99, category: "Electronics" },
    { id: 3, name: "Nike Shoes", price: 79.99, category: "Clothing" },
    { id: 4, name: "Adidas Shoes", price: 89.99, category: "Clothing" },
    { id: 5, name: "Levi Jeans", price: 59.99, category: "Clothing" },
  ];
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    { id: 1, name: "Apple iPhone 12", price: 999.99, category: "Electronics" },
    { id: 2, name: "Samsung TV", price: 1299.99, category: "Electronics" },
    { id: 3, name: "Nike Shoes", price: 79.99, category: "Clothing" },
    { id: 4, name: "Adidas Shoes", price: 89.99, category: "Clothing" },
    { id: 5, name: "Levi Jeans", price: 59.99, category: "Clothing" },
  ];
  const getSingleProduct = products.find((product) => product.id === productId);
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("Product not found");
  }
});
