//Step 1: Database connection
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb://tcet_user:tcet_user_123@cluster0-shard-00-00.4jzl9.mongodb.net:27017,cluster0-shard-00-01.4jzl9.mongodb.net:27017,cluster0-shard-00-02.4jzl9.mongodb.net:27017/ESD?ssl=true&replicaSet=atlas-a056xh-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (similar Java Class)
const serviceSchema = new mongoose.Schema({
	name: String, 
	age: Number,
	email: String,
	reqdomain: String,
	req: String,
	reqstatus: String
})

//Step 3: Create collection Object (model)
// MAPPING 
const serviceObject = new mongoose.model("services", serviceSchema);

exports.Service = serviceObject;