import express from "express";
import payload from "payload";
import Environment from "./Lib/Environment";

const app = express();

app.get("/", (_, res) => {
	res.redirect("/admin");
});

payload.init({
	secret: Environment["PAYLOAD_SECRET"],
	mongoURL: Environment["MONGODB_URI"],
	express: app,
	onInit: () => {
		payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
	},
});

app.listen(3000);
