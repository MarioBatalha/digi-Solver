import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/digisolver")
	.then(() => {
		console.log("mongodb connected");
	})
	.catch((err) => {
		console.log("failed to connect to mongodb: " + err.message);
	});

const examSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	weight: {
		type: Number,
		required: true,
	},

	height: {
		type: Number,
		required: true,
	},

	age: {
		type: Number,
		required: true,
	},

	phone: {
		type: Number,
		required: true,
	},

	warning: {
		type: String,
	},

	examType: {
		type: String,
		required: true,
	},

	status: {
		type: String,
	},

	price: {
		type: Number,
		required: true,
	},

	createdAt: {
		type: Date,
		default: new Date().toISOString(),
	},
});

const adminSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: [true, "Email Exist"],
	},

	password: {
		type: String,
		riquered: true,
	},

	role: {
		type: String,
	},

	createdAt: {
		type: Date,
		default: new Date().toISOString(),
	},
});

const patientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: [true, "Email Exist"],
	},

	password: {
		type: String,
		required: true,
	},

	weight: {
		type: Number,
		required: true,
	},

	height: {
		type: Number,
		required: true,
	},

	age: {
		type: Number,
		required: true,
	},

	phone: {
		type: Number,
		required: true,
	},

	warning: {
		type: String,
	},

	createdAt: {
		type: Date,
		default: new Date().toISOString(),
	},
});

export const patient = new mongoose.model("patients", patientSchema);
export const admin = new mongoose.model("admins", adminSchema);
export const exam = new mongoose.model("exams", examSchema);
