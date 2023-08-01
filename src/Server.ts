import express from "express";
import payload from "payload";
import ENV from "./lib/Env";

const app = express();

app.get("/", (_, res) => {
	res.redirect("/admin");
});

payload.init({
	secret: ENV["PAYLOAD_SECRET"],
	mongoURL: ENV["MONGODB_URI"],
	express: app,
	onInit: () => {
		payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
	},
});

app.listen(3000);
