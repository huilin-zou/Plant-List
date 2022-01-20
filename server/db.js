const Pool=require("pg").Pool;
const bcrypt = require("bcryptjs"); // hash password
const pool=new Pool({
    user:"postgres",
    
    database:"pernplants"
});

module.exports=pool;
