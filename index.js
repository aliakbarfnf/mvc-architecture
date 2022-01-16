require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
