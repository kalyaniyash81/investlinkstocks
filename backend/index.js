require('dotenv').config();
const express = require('express')
const app = express()
const uri = process.env.MONGO_URL;
const port = process.env.port || 3002;
const cors = require('cors');
const authRoute = require("./Routes/AuthRoute.js");
const bodyParser = require('body-parser');


const {holding} = require("./model/holdingModel.js");

const {position} = require('./model/PostionModel.js');
const {OrderModel} = require("./model/OrderModel.js");
const { default: mongoose } = require('mongoose');
const cookieParser = require("cookie-parser");
// const { default: Orders } = require('../dashboard/src/components/Orders.js');
app.use(cors({
  origin: ["http://localhost:3000","http://localhost:3001"],
  credentials: true // This allows cookies or other credentials to be sent
}))
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.json());
app.get('/allHoldings',async(req,res)=>{
  let allHoldings = await holding.find({});
  res.json(allHoldings);
});
app.get('/allPosition',async(req,res)=>{
  let allPosition = await position.find({});
  res.json(allPosition);
});
app.get('/allOrder',async(req,res)=>{
  let order = await OrderModel.find({});
  res.json(order);
})
app.post("/newOrder",async(req,res)=>{
 let newOrder = new OrderModel({
  name:req.body.name,
  qty:req.body.qty,
  price:req.body.price,
  mode:req.body.mode,
  curr:req.body.curr,
 })
 await newOrder.save();
 res.send('saved');
})
app.delete("/delete/:id",async(req,res)=>{
  let {id} = req.params;
  await OrderModel.findByIdAndDelete(id);
})


app.use('/',authRoute);
mongoose.connect(uri,{
})
.then(() => console.log("MongoDB is  connected successfully"))
.catch((err) => console.error(err));
app.listen(3002,()=>{
  console.log('listing on port',3002);

})

