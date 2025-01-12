import {MarketplaceListing} from "../../app/models/marketplace-listing.model";

export const MARKETPLACE_LISTING: MarketplaceListing[] = [
	{
		id: "string",
		quantity: 123,
		price: 123,
		unit: "string",
		description: "string",
		imageUrl: "string",
		type: "string",
		creationDate: new Date(),
		seller: {
			id: "string",
			username: "string",
			phone: "string",
			region: "string"
		},
		produce: {
			id: 123,
			name: "string",
			unitOfMeasure: "string",
			type: "string",
		}
	},
]
