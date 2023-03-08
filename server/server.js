import express from "express";
import path from "path";
import hbs from "hbs";
import collection from "./mongodb.js";
import { request } from "http";
import cors from "cors";
//const templatePath = path.join(__dirname, "./src/templates");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.set("views", templatePath);

//getting data
app.get("/signin", (req, res) => {
	res.render("signin");
});

app.get("/signup", (req, res) => {
	res.render("signup");
});

//insert data
app.post("/signup", async (req, res) => {
	try {
		const data = {
			email: req.body.email,
			password: req.body.password,
		};

		await collection.insertMany([data]);

		console.log("user added successfully");
	} catch (err) {
		console.error("signup error", err);
	}
});

app.post("/signin", async (req, res) => {
	try {
		const checkUser = await collection.findOne({ email: req.body.email });

		if (checkUser.password === req.body.password) {
			console.log("welcome back", req.body.email);
		} else {
			res.send("wrong password or email address");
		}
	} catch (error) {
		console.log("signin error", error);
	}
});

app.listen(3333, () => {
	console.log("Server is running on port 3333");
});
