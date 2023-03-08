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

const collection = new mongoose.model("collection1", signinSchema);

export default collection;
