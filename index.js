/* https://esddma.herokuapp.com/ | 
https://git.heroku.com/esddma.git */
const express = require("express");
const port = 8080;

const ser_model = require("./service_module");
const Service = ser_model.Service;

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Friends..");
});

app.get("/service", async (req, res) => {
	let data = await Service.find().sort({_id:-1});
	res.send(data);
});

app.get("/service/:id", async (req, res) => {
	console.log(req.params.id);
	let data = await Service.find({"_id": req.params.id});
	res.send(data[0]);
});

app.post("/service", async (req, res) => {
	console.log(req.body)
	let u = await Service(req.body);
	let result = u.save();
	res.send(req.body);
});

app.put("/service", async (req, res) => {
	console.log(req.body);
	
	//User.updateOne({where}, {set});
	let u_data = await Service.updateOne({"_id": req.body._id}, {
		"$set": {
			"name" : req.body.name,
			"age" : req.body.age,
			"email" : req.body.email,
			"reqdomain" : req.body.reqdomain,
			"req" : req.body.req,
			"reqstatus" : req.body.reqstatus
		}
		
	});
	res.send(u_data);
});

app.delete("/service", async(req, res) => {
	
	let d_data = await Service.deleteOne({"_id": req.body._id});
	res.send(d_data);
});

app.listen(process.env.PORT || port, () => {	
	console.log(`Listening on port ${port}`);
});