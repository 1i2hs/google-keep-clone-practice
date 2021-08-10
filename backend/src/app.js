const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./api");

const app = express();

app.use(cors());

app.use(require("method-override")());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api", api);

app.use((req, res, next) => {
  const error = new Error(`존재하지 않는 API 경로입니다.`);
  error.status = 404;
  next(error);
});

/// error handler
app.use((error, req, res, next) => {
  console.error(error);
  if (error.status) {
    res.status(error.status).json({
      msg: error.message,
    });
    return;
  }
  res.status(500).json({
    msg: "서버 내부에서 문제가 발생하였습니다",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API server is listening at port ${PORT}`);
});
