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
	email: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},
});

const collection = new mongoose.model("collection1", signinSchema);

export default collection;
