import express from "express";
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;
const __dirname = path.resolve();

app.listen(PORT);
app.get("/login",(req, res)=>{
  console.log('in');
  let userLoginParam = req.params;
  console.log(userLoginParam);
});


// app.use(bodyParser.json());                             //json등록
// app.use(bodyParser.urlencoded({ extended : false }));   //URL-encoded 등록

// app.post("/login", (req,res)=>{
//   let body = req.body;
//   console.log(body);
// })