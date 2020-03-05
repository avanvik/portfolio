export default {
	type: "document",
	name: "portfolioEntry",
	fields: [
		{
			name: "title",
			type: "string"
		},
		{
			name: "content",
			type: "array",
			of: [
				{ type: "block" },
				{ type: "image" },
				{
					type: "object",
					name: "video",
					fields: [
						{ name: "url", type: "string" }
					]
				}
			]
		}
	]
}

