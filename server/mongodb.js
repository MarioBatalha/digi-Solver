import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/digisolver")
	.then(() => {
		console.log("mongodb connected");
	})
	.catch((err) => {
		console.log("failed to connect to mongodb: " + err.message);
	});

const signinSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
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
		max: 2,
		required: true,
	},

	phone: {
		type: Number,
		max: 12,
		required: true,
	},

	warning: {
		type: String,
		max: 200,
	},

	createdAt: {
		type: Date,
		default: new Date().toString(),
	},
});

const collection = new mongoose.model("collection1", signinSchema);

export default collection;
