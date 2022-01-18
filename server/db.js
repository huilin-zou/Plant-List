const Pool=require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    password:"zhl0818",
    host:"localhost",
    port:5432,
    database:"pernplants"
});

module.exports=pool;