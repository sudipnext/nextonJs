const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>HOMEPAGE</h1><a href="/api/products">PRODUCTS</a>');
});
app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});
app.get("/api/products/:productID", (req, res) => {
//   console.log(req);
//   console.log(req.params);
const {productID} = req.params;
  const singleProduct = products.find((product) => product.id === Number(productID));
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
