require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Salve CORS - OBS: Se de algo errado colocar o endereço da vercel | OBS: Endereço com vite: "http://localhost:5173" | OBS: Endereço com create-react-app: "http://localhost:3000"
app.use(
  cors({ credentials: true, origin: "https://my-gram-front-end.vercel.app" })
);

// DB connection
require("./config/db.js");

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Import Router
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
