const userModel= require('../models/user')
const { validateName , validateEmail , validatePassword , validateMobileNo  }=require('../validation/validate')
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
const restaurantModel=require("../models/restaurent")
const foodModel=require("../models/food_items")
const cityModel=require("../models/city")

const createuser=async function(req,res){
  console.log(req) 
  try{ 
    let data=req.body 
    const {name,email,location,password,phone}=data

    if (!name || !name.trim())
      return res.status(400).send({status: false, message: "Please provide name or it can't be empty" });

      if (!validateName(name))
      return res.status(400).send({status: false, message: "Please provide  valid name " });

      if (!email)
      return res.status(400).send({ status: false, messsage: "Email is mandatory" });

      

      let checkEmailId = await userModel.findOne({ email: email });

    if (checkEmailId) {
      return res.status(400).send({ status: false, message: "This email Id is already in use." });
    }

    if (!phone)
      return res.status(400).send({ status: false, messsage: "Phone is mandatory" });

      if (!validateMobileNo(phone))
      return res.status(400).send({ status: false, messsage: "Please provide valid phone Number" });

      let checkphone = await userModel.findOne({ phone: phone });

    if (checkphone) { 
      return res.status(400).send({status: false,message: "This mobile number is already in use."});
    }

    if (!password)
      return res.status(400).send({ status: false, messsage: "Paasword is mandatory" });

      if (!validatePassword(password))
      return res.status(400).send({status: false,messsage: "Please provide valid password,it should contain uppercase,number and special character and 8-15 length"});  

      let hashing = bcrypt.hashSync(password, 8);
      data.password = hashing;

      let savedata = await userModel.create(data);

      return res.status(201).send({status: true,message: "User created successfully",data: savedata});
    }catch(error) {
        return res.status(500).send({ status: false, message: error.message });
}
};
  

    const userLogin = async function (req, res) {
        try {
          let { email, password } = req.body;
      
          if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, message: "Please input user Details" });
          }
      
          if (!email) {
            return res.status(400).send({ status: false, message: "EmailId is mandatory" });
          }
      
          // if (!validateEmail(email)) {
          //   return res.status(400).send({ status: false, message: "EmailId should be Valid" });
          // }
      
          if (!password) {
            return res.status(400).send({ status: false, message: "Password is mandatory" });
          }
      
          let verifyUser = await userModel.findOne({ email: email });
          if (!verifyUser) {
            return res.status(400).send({ status: false, message: "user not found" });
          }
      
          let hash = verifyUser.password;
      
          let isCorrect = bcrypt.compareSync(password, hash);
          if (!isCorrect)
            return res.status(400).send({ status: false, message: "Password is incorrect" });
      
          let payload = { userId: verifyUser["_id"], iat: Date.now() };
          let token = jwt.sign(payload, "jwtSecret", { expiresIn: "1h" });
      
          res.setHeader("x-api-key", token);
          return res.status(200).send({
            status: true,
            message: "User login successfull",
            data: { userId: verifyUser["_id"], token },
          });
        } catch (error) {
          return res.status(500).send({ status: false, message: error.message });
        }
      };


      const getcity = async function(req,res){
        let finddata= await cityModel.find()
        res.send({data:finddata})
      }

      // const restaurantapi=async function(req,res){
      //   let name=req.params.name;
      //   let finddata=await cityModel.findOne({name:name})
      //   let id=finddata._id
      //   let restaurant=await restaurantModel.find({city_id:id})
      //   console.log(id);
      //   res.send({status:true, data:restaurant})
      // }
      const restaurantapi=async function(req,res){
        let name=req.params.name;
        let restaurant=await restaurantModel.find({city_id:name})
         res.send({status:true, data:restaurant})
      }

      const foodapi=async function(req,res){
        let name=req.params.food
        // let finddata=await restaurantModel.findOne({restaurant:name})
        // if(!finddata) return res.send({status:false})
        // let id=finddata._id
        let findfood=await foodModel.find({restaurant_id:name})
        res.send({status:true,data:findfood})
      }







      



    module.exports={createuser,userLogin,restaurantapi,getcity,foodapi}