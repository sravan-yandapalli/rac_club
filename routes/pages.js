const express=require("express");
const router=express.Router();
const userController=require("../controllers/users");

router.get("/",userController.isLoggedIn,(req, res)=>{
  // console.log(req.name) 
  if(req.user){
    res.render("index",{user:req.user});
  }else{
    res.redirect("/login");
  } 
    
});

router.get("/profile",userController.isLoggedIn,(req,res)=>{
  if(req.user){
  res.render("profile",{user:req.user});
  }else{
    res.redirect("/login");
  }
 });


router.get("/register",(req, res)=>{   //server of any thing req,res./
  res.render("register");
});

router.get("/login",(req, res)=>{   //server of any thing req,res./
  res.render("login");
});


 module.exports = router;