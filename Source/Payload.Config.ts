import { resolve as Resolve } from "path";
import { buildConfig } from "payload/config";
import Environment from "./Library/Environment";
import Users from "./collections/Users";

export default buildConfig({
	serverURL: "http://localhost:3000",
	admin: {
		user: Users.slug,
	},
	collections: [Users],
	typescript: {
		outputFile: Resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: Resolve(__dirname, "generated-schema.graphql"),
	},
	cookiePrefix: Environment["COOKIE"],
});
