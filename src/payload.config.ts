import { resolve } from "path";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import env from "./lib/env";

export default buildConfig({
	serverURL: "http://localhost:3000",
	admin: {
		user: Users.slug,
	},
	collections: [Users],
	typescript: {
		outputFile: resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: resolve(__dirname, "generated-schema.graphql"),
	},
	cookiePrefix: env["COOKIE"],
});
