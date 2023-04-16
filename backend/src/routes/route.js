const router = require("express").Router();
const {createuser,userLogin,restaurantapi,getcity,foodapi}=require("../controllers/userC")


router.post( "/register" , createuser );
router.post( "/login" , userLogin );
router.get("/city",getcity)
router.get("/restaurant/:name",restaurantapi)
router.get("/foods/:food",foodapi)


// router.post('/foodData', (req,res)=>{
// try {
//      console.log(global.food_items) 
//     res.send([global.food_items]) 
// } catch (error) { 
//     console.error(error.message)
//     res.send("Server Error");
//     }
// })
router.post('/fooddataa',function(req,res){

})


// router.all('/*', ( req , res ) => {
//     res.status(400).send({ status: false, message: " Path invalid." });
// });


module.exports=router