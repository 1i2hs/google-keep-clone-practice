const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./api");

const app = express();

// The magic package that prevents frontend developers going nuts
// Alternate description:
// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Some sauce that always add since 2014
// "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
// Maybe not needed anymore ?
app.use(require("method-override")());

// Middleware that transforms the raw string of req.body into json
app.use(express.json());

// HTTP request logger middleware
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
