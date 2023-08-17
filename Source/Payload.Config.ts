import { resolve as Resolve } from "path";
import { buildConfig } from "payload/config";
import Environment from "./Library/Environment";
import User from "./Collection/User";

export default buildConfig({
	serverURL: "http://localhost:3000",
	admin: {
		user: User.slug,
	},
	collections: [User],
	typescript: {
		outputFile: Resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: Resolve(__dirname, "generated-schema.graphql"),
	},
	cookiePrefix: Environment["COOKIE"],
});
