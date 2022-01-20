const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcryptjs");
const{usernameValidation,passwordValidation}=require("./validation")

app.use(cors());
app.use(express.json()); //req.body

//sign up
app.post("/userinfo", async (req, res) => {
  try {

    let errors={}
    const { username } = req.body;
    const { password } = req.body;

    //password encryption
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    

//check if username is taken
const isUsernameInUse=await pool.query("select * from userinfo where username=$1",[username])
if(isUsernameInUse.rows.length>0){
  errors.usernameInUse="Username in use"
}
//create new user
const newUser = await pool.query(
  "INSERT INTO userinfo(username,password) VALUES($1,$2) RETURNING * ",
  [username, hashedPassword]
);
    console.log("sign up success")
    res.json(newUser.rows[0]);

  } catch (err) {
    console.log("26",err.message);
  }
});

//user log in
app.post("/userinfo/:username", async (req, res) => {
 
  try {
    const {username}=req.params
   const{password}=req.body
    const user = await pool.query("select * from userinfo where username=$1",[username])
    
    

    //log in
    if(user.rows.length===0){
      console.log("user not found")
    }
    
    const isMatch=await bcrypt.compare(password,user.rows[0].password)
    if(!isMatch){
      console.log("password incorrect")
    }
   
    if(isMatch){
      res.json(user.rows[0]);
      console.log("yey log in success")
    }

  } catch (error) {
    console.log("in log in error:  ",error.message)
  }
});

//get all users
app.get("/userinfo", async (req, res) => {
  try {
    const allUsers = await pool.query("select * from userinfo");
    res.json(allUsers.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//create a plant
app.post("/plants", async (req, res) => {
  try {
    const { name } = req.body;
    const newPlant = await pool.query(
      "INSERT INTO plant(name) VALUES($1) RETURNING * ",
      [name]
    );
    res.json(newPlant.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//get all plants
app.get("/plants", async (req, res) => {
  try {
    const allPlants = await pool.query("select * from plant");
    res.json(allPlants.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get a plant
app.get("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await pool.query("select * from plant where pid=$1 ", [id]);
    res.json(plant.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//update plant
app.put("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatePlant = await pool.query(
      "update plant set name=$1 where pid=$2",
      [name, id]
    );
    res.json("plant was updated");
  } catch (error) {
    console.log(error.message);
  }
});

//delete a plant
app.delete("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlant = await pool.query("delete from plant where pid=$1", [
      id,
    ]);
    res.json("deleted");
  } catch (error) {
    console.log(error.message);
  }
});
app.listen(5000, () => {
  console.log("server has started on port 5000");
});