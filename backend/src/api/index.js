// 계층적으로 API를 관리
const express = require("express");
const noteRouter = require("./noteRouter");
const router = express.Router();

router.use("/notes", noteRouter);

module.exports = router;
