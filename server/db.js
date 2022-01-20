const Pool=require("pg").Pool;
const bcrypt = require("bcryptjs"); // hash password
const pool=new Pool({
    user:"postgres",
    
    database:"pernplants"
});

module.exports=pool;
<<<<<<< HEAD

/* password:"zhl0818",
    host:"localhost",
    port:5432,*/
=======
>>>>>>> ad8535cc8e1da187460c0a1c8efe9821e21cf988
