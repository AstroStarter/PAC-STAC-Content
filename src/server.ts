import express from "express";
import payload from "payload";
import env from "./lib/env";

const app = express();

app.get("/", (_, res) => {
	res.redirect("/admin");
});

payload.init({
	secret: env["PAYLOAD_SECRET"],
	mongoURL: env["MONGODB_URI"],
	express: app,
	onInit: () => {
		payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
	},
});

app.listen(3000);
