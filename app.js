const express = require("express");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const { query } = require("./db/index");
const mailRouter = require("./routes/mail");

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} request received to ${req.url}`);
  next();
});

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("healthy!");
});

app.use(mailRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
