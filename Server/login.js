import express from "express";

const router = express.Router();
router.get("/login", (req, res)=>{
  res.send("로그인 API입니다.")
});

export default router;