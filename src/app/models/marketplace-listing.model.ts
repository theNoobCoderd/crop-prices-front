export interface MarketplaceListing {
	id: string,
	quantity: number,
	price: number,
	unit: string,
	description: string,
	imageUrl: string,
	type: string,
	creationDate: Date,
	seller: {
		id: string,
		username: string,
		phone: string,
		region: string
	}
	produce: {
		id: number,
		name: string,
		unitOfMeasure: string,
		type: string,
	},
	isDeleted: boolean,
}
