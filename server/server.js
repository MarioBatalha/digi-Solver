import express, { json } from "express";
import path from "path";
import hbs from "hbs";
import { patient } from "./mongodb.js";
import { admin } from "./mongodb.js";
import { exam } from "./mongodb.js";
import { request } from "http";
import cors from "cors";
//const templatePath = path.join(__dirname, "./src/templates");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.set("views", templatePath);

//Manipulating patient data
app.post("/patient/signup", async (req, res) => {
	try {
		const data = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			weight: req.body.weight,
			height: req.body.height,
			age: req.body.age,
			phone: req.body.phone,
			warning: req.body.warning,
		};

		await patient.insertMany([data]);

		console.log("patient added successfully");
	} catch (err) {
		console.error("signup error", err);
	}
});

app.post("/patient/signin", async (req, res) => {
	try {
		const checkPatient = await patient.findOne({ email: req.body.email });

		if (checkPatient.password === req.body.password) {
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

//Manipulating admin data
app.post("/admin/signup", async (req, res) => {
	try {
		const data = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			role: req.body.role,
		};

		await admin.insertMany([data]);

		console.log("admin added successfully");
	} catch (err) {
		console.error("signup error", err);
	}
});

app.post("/admin/signin", async (req, res) => {
	try {
		const checkAdmin = await admin.findOne({ email: req.body.email });

		if (checkAdmin.password === req.body.password) {
			console.log("welcome back", req.body.email);
		} else {
			res.send("wrong password or email address");
		}
	} catch (error) {
		console.log("signin error", error);
	}
});

//Manipulating exams
app.post("/exam/request", async (req, res) => {
	try {
		const data = {
			name: req.body.name,
			email: req.body.email,
			weight: req.body.weight,
			height: req.body.height,
			age: req.body.age,
			phone: req.body.phone,
			warning: req.body.warning,
			examType: req.body.examType,
			status: req.body.status,
			price: req.body.price,
		};

		const checkPatient = await patient.findOne({
			email: req.body.email,
			name: req.body.name,
		});
		if (
			checkPatient.email === req.body.email &&
			checkPatient.name === req.body.name &&
			checkPatient.weight === req.body.weight &&
			checkPatient.height === req.body.height &&
			checkPatient.age === req.body.age
		) {
			await exam.insertMany([data]);
			console.log("welcome back", req.body.email);
		} else {
			res.send("email is wrong or not valid");
		}

		console.log("exam added successfully");
	} catch (err) {
		console.error("Error creating exam", err);
	}
});

app.post("/exam/update", async (req, res) => {
	try {
	} catch (error) {
		console.log("Error updating exam", error);
	}
});

app.get("/exam", async (req, res) => {
	try {
		const allExam = exam.find();
		console.log(allExam);
	} catch (error) {
		console.log("Error updating exam", error);
	}
});
