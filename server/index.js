const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body

//create a plant
app.post("/plants", async (req, res) => {
  try {
    const { name } = req.body;
    const newPlant = await pool.query("INSERT INTO plant(name) VALUES($1) RETURNING * ", [
      name,
    ]);
    res.json(newPlant.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//get all plants
app.get("/plants",async(req,res)=>{
    try {
        const allPlants=await pool.query("select * from plant");
        res.json(allPlants.rows)
    } catch (error) {
     console.log(error.message)   
    }
})

//get a plant
app.get("/plants/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const plant=await pool.query("select * from plant where pid=$1 ",[id])
        res.json(plant.rows[0])
    } catch (error) {
        console.log(error.message)   

    }
})

//update plant
app.put('/plants/:id',async(req,res)=>{
    try {
        const {id}=req.params
    const{name}=req.body
    const updatePlant=await pool.query("update plant set name=$1 where pid=$2",[name,id])
    res.json("plant was updated")
} catch (error) {
        console.log(error.message)   

    }
})

//delete a plant
app.delete("/plants/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const deletePlant=await pool.query("delete from plant where pid=$1",[id])
        res.json("deleted")
    } catch (error) {
        console.log(error.message)   

    }
})
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
