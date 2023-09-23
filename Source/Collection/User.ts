import type { CollectionConfig as Type } from "payload/types";

export default {
	slug: "User",
	auth: true,
	admin: {
		useAsTitle: "email",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
		},
	],
} satisfies Type;
