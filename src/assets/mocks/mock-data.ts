import {MarketplaceListing} from "../../app/models/marketplace-listing.model";
import {Vegetable} from "../../app/models/vegetable.model";
import {Unit} from "../../app/models/unit.enum";
import {Type} from "../../app/models/type.enum";

export const MARKETPLACE_LISTING: MarketplaceListing[] = [
	{
		"id": "138f9852-51b9-4707-9178-9686a0323fa8",
		"quantity": 99855.0,
		"price": 885.0,
		"unit": "KG",
		"description": "Desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 21,
			"name": "Carry Poulet",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-02-13T18:09:22.417Z"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "182808eb-93f9-4bd1-9ee1-013a4f74134c",
		"quantity": 222.0,
		"price": 333.0,
		"unit": "KG",
		"description": "safrron",
		"imageUrl": "https://firebasestorage.googleapis.com/v0/b/fir-crops-main.firebasestorage.app/o/uploads%2FKOZPRI_X_DIY_GEOTEXTILES%402x.jpg?alt=media&token=35b05589-5ce0-4d2a-bafd-866e47809d90",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 72,
			"name": "Sans Fils (Haricot)",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-02-13T17:59:15.668Z"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "3e215ef4-dace-4eb6-aea1-b4408e0561e3",
		"quantity": 25.0,
		"price": 20.0,
		"unit": "KG",
		"description": "desc RAV",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 70,
			"name": "Romarin",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-11-04T17:36:48.390Z"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "4a359467-bf47-4909-ae1a-adb6c0129001",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 15,
			"name": "Bringelle (Rond)",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-01-29"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "593869f0-a00d-4055-a84a-413087606e2a",
		"quantity": 5.0,
		"price": 39.0,
		"unit": "KG",
		"description": "good stuff",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "777aa2c8-1e16-489a-808a-3a68eeec239d",
			"username": "opskin",
			"phone": "58224207",
			"region": "North"
		},
		"produce": {
			"id": 45,
			"name": "Lepois Carré",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-11-16"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "6411bb51-7123-4eb3-b38b-82830ec95f77",
		"quantity": 55.0,
		"price": 12.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "",
			"username": "",
			"phone": "",
			"region": ""
		},
		"produce": {
			"id": 75,
			"name": "Ti Piment",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-11-04"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "6ae0cf71-7e2b-4e21-91d9-b16aeb11ffec",
		"quantity": 999.0,
		"price": 996.0,
		"unit": "KG",
		"description": "Desc",
		"imageUrl": "https://firebasestorage.googleapis.com/v0/b/fir-crops-main.firebasestorage.app/o/uploads%2F1000021896.jpg?alt=media&token=2d1ecc2a-2006-40af-a429-6c2ba502a6df",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 75,
			"name": "Ti Piment",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-02-13"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "73d94748-e4a3-4afe-9ec0-bc7374ae8323",
		"quantity": 25.0,
		"price": 2.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 13,
			"name": "Brede Tom Pouce",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-11-04"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "7de789bd-0fac-453f-8853-5f82ef65c87f",
		"quantity": 500.0,
		"price": 50.0,
		"unit": "KG",
		"description": "None",
		"imageUrl": "https://firebasestorage.googleapis.com/v0/b/fir-crops-main.firebasestorage.app/o/uploads%2F1000050629.jpg?alt=media&token=a9611f56-d143-4259-bf3f-3067e961e8e1",
		"type": "VEGETABLE",
		"seller": {
			"id": "",
			"username": "Oumar",
			"phone": "57418855",
			"region": "South"
		},
		"produce": {
			"id": 10,
			"name": "Brede National",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-02-13"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "901cb7b9-6841-4d10-8eb8-8881608101fa",
		"quantity": 25.0,
		"price": 256.0,
		"unit": "KG",
		"description": "Gros laitue",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 41,
			"name": "Lalo",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-02-13"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "9ece14c6-6b07-43bd-8718-f99eac8e78c9",
		"quantity": 999.0,
		"price": 250.0,
		"unit": "KG",
		"description": "Poivron Laserre",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 64,
			"name": "Poivron (Vert)",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-09-06"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "a18423d7-d73b-406f-ba41-0b3b25bd84c6",
		"quantity": 22.0,
		"price": 23.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 17,
			"name": "Butternut",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-09-06"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "be1128da-f79d-4135-86b9-6560c20f7638",
		"quantity": 557.0,
		"price": 50.0,
		"unit": "KG",
		"description": "desc potato",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 68,
			"name": "Radis",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-11-04"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "c2ada2f6-bbec-4a7f-b81d-a47900915df1",
		"quantity": 23.0,
		"price": 221.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 6,
			"name": "Brede Baton Vert",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-11-04"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "d3631e80-f432-4218-89a0-ee03cabd8c10",
		"quantity": 54.0,
		"price": 55.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 19,
			"name": "Calebasse chinois",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-10-27"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "d464e48c-25c3-4cbe-a08d-a193f7174cb6",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "22",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 76,
			"name": "Ti Pois",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-11-07"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "d82f4318-4629-4c95-afd7-016e69c66a5c",
		"quantity": 23.0,
		"price": 76.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 11,
			"name": "Brede Songe",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-10-27"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "e17e37e6-726b-49ae-8668-ba8c15472bb8",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "https://firebasestorage.googleapis.com/v0/b/fir-crops-main.firebasestorage.app/o/uploads%2Ftest1.jpg?alt=media&token=c5ec65d5-b404-4144-8a9e-7d50341f4014",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 62,
			"name": "Turnip",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-01-29"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "eadeab4a-cd48-4579-9ba0-8e87ca5b7995",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 18,
			"name": "Calebasse",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-01-29"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "f435385d-c3a3-43c2-9edc-2e7cf89945b9",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "3056ef11-dab2-4dce-9910-9b1c45485b30",
			"username": "ism",
			"phone": "123123123",
			"region": "North"
		},
		"produce": {
			"id": 2,
			"name": "Arouille",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-09-06"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "f62f1828-3776-4185-8659-fc8763fe8339",
		"quantity": 999.0,
		"price": 999.0,
		"unit": "KG",
		"description": "Desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 77,
			"name": "Tomate",
			"unitOfMeasure": "KG",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2025-02-13"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	}
]

export const USER_LISTING: MarketplaceListing[] = [
	{
		"id": "4a359467-bf47-4909-ae1a-adb6c0129001",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 15,
			"name": "Bringelle (Rond)",
			"unitOfMeasure": "Kg",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-09-06"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "e17e37e6-726b-49ae-8668-ba8c15472bb8",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "https://firebasestorage.googleapis.com/v0/b/fir-crops-main.firebasestorage.app/o/uploads%2Ftest1.jpg?alt=media&token=c5ec65d5-b404-4144-8a9e-7d50341f4014",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 62,
			"name": "Turnip",
			"unitOfMeasure": "Kg",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-09-06"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	},
	{
		"id": "eadeab4a-cd48-4579-9ba0-8e87ca5b7995",
		"quantity": 22.0,
		"price": 22.0,
		"unit": "KG",
		"description": "desc",
		"imageUrl": "",
		"type": "VEGETABLE",
		"seller": {
			"id": "2a9c40c1-f911-4203-86be-c36d87598d93",
			"username": "test",
			"phone": "1232216767",
			"region": "North"
		},
		"produce": {
			"id": 18,
			"name": "Calebasse",
			"unitOfMeasure": "Kg",
			"type": "VEGETABLE"
		},
		"creationDate": new Date("2024-09-06"),
		"isDeleted": false,
		"expiryDate": new Date("2024-09-09")
	}
]

export const GRAPH_TWO: any = {
	"vegetableName": "Angive",
	"unit": "KG",
	"lowestPrices": [
		50.0,
		50.0,
		40.0,
		50.0,
		50.0,
		50.0,
		40.0,
		50.0
	],
	"mostCommonPrices": [
		50.0,
		100.0,
		50.0,
		50.0,
		30.0,
		50.0,
		10.0,
		20.0
	],
	"highestPrices": [
		60.0,
		70.0,
		60.0,
		60.0,
		60.0,
		70.0,
		60.0,
		60.0
	],
	"totalSoldList": [
		925.0,
		855.0,
		650.0,
		865.0,
		925.0,
		855.0,
		650.0,
		865.0
	],
	"dates": [
		"2025-06-09",
		"2025-06-10",
		"2025-06-12",
		"2025-06-13",
		"2025-06-14",
		"2025-06-15",
		"2025-06-16",
		"2025-06-17"
	],
	"revenue": [
		46250.0,
		42750.0,
		32500.0,
		43250.0,
		46250.0,
		42750.0,
		32500.0,
		43250.0
	],
	"highestPrice": 70.0,
	"lowestPrice": 40.0,
	"averagePrice": 50.0
}

export const GRAPH_ONE: Vegetable[] = [
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 220.0,
		"lowPrice": 40.0,
		"highPrice": 60.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-04-19"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 625.0,
		"lowPrice": 40.0,
		"highPrice": 60.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-04-23"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-04-25"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 675.0,
		"lowPrice": 50.0,
		"highPrice": 60.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-05-02"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 675.0,
		"lowPrice": 60.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-05-30"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 525.0,
		"lowPrice": 50.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-05-31"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 30.0,
		"highPrice": 60.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-06-01"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 100.0,
		"lowPrice": 60.0,
		"highPrice": 60.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-06-03"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1095.0,
		"lowPrice": 50.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-06-04"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 3375.0,
		"lowPrice": 50.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-06-07"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 400.0,
		"lowPrice": 25.0,
		"highPrice": 40.0,
		"averagePrice": 25.0,
		type: Type.VEGETABLE,
		"date": "2024-06-08"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 675.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 75.0,
		type: Type.VEGETABLE,
		"date": "2024-06-10"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 70.0,
		"highPrice": 70.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-06-11"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 260.0,
		"lowPrice": 60.0,
		"highPrice": 70.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-06-13"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 2000.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-06-14"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 65.0,
		"lowPrice": 40.0,
		"highPrice": 80.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-06-15"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 490.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-06-17"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 100.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-06-18"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 280.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-06-20"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 970.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-06-21"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 250.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 90.0,
		type: Type.VEGETABLE,
		"date": "2024-06-24"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 50.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-06-25"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 950.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-06-27"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-06-28"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 180.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-06-29"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 35.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-01"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 480.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 75.0,
		type: Type.VEGETABLE,
		"date": "2024-07-02"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 240.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-04"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 625.0,
		"lowPrice": 80.0,
		"highPrice": 90.0,
		"averagePrice": 90.0,
		type: Type.VEGETABLE,
		"date": "2024-07-05"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 225.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-07-06"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 0.0,
		"lowPrice": 0.0,
		"highPrice": 0.0,
		"averagePrice": 0.0,
		type: Type.VEGETABLE,
		"date": "2024-07-08"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 0.0,
		"lowPrice": 0.0,
		"highPrice": 0.0,
		"averagePrice": 0.0,
		type: Type.VEGETABLE,
		"date": "2024-07-09"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 80.0,
		"highPrice": 90.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-11"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 725.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-12"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-13"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 150.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-15"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 540.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-16"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1200.0,
		"lowPrice": 80.0,
		"highPrice": 90.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-18"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 875.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-07-19"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1070.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-07-20"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 0.0,
		"lowPrice": 0.0,
		"highPrice": 0.0,
		"averagePrice": 0.0,
		type: Type.VEGETABLE,
		"date": "2024-07-22"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 250.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-23"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-25"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 275.0,
		"lowPrice": 80.0,
		"highPrice": 80.0,
		"averagePrice": 80.0,
		type: Type.VEGETABLE,
		"date": "2024-07-26"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 50.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-07-27"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 70.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-07-29"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 450.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-07-30"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 675.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-08-01"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-08-02"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 330.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-08-03"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 0.0,
		"lowPrice": 0.0,
		"highPrice": 0.0,
		"averagePrice": 0.0,
		type: Type.VEGETABLE,
		"date": "2024-08-05"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 0.0,
		"lowPrice": 0.0,
		"highPrice": 0.0,
		"averagePrice": 0.0,
		type: Type.VEGETABLE,
		"date": "2024-08-06"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 35.0,
		type: Type.VEGETABLE,
		"date": "2024-08-08"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 40.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-08-09"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 460.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-08-10"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 90.0,
		"lowPrice": 60.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-08-12"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 375.0,
		"lowPrice": 60.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-08-13"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 300.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-08-15"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1050.0,
		"lowPrice": 60.0,
		"highPrice": 80.0,
		"averagePrice": 70.0,
		type: Type.VEGETABLE,
		"date": "2024-08-16"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 805.0,
		"lowPrice": 60.0,
		"highPrice": 70.0,
		"averagePrice": 60.0,
		type: Type.VEGETABLE,
		"date": "2024-08-17"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 335.0,
		"lowPrice": 50.0,
		"highPrice": 60.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-08-19"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 40.0,
		"highPrice": 60.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-08-20"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1075.0,
		"lowPrice": 50.0,
		"highPrice": 60.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-08-22"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1640.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-08-23"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 2000.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-08-24"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 500.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-08-26"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 150.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 44.0,
		type: Type.VEGETABLE,
		"date": "2024-08-27"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1250.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-08-29"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1440.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-08-30"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1150.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-08-31"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 100.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-02"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 250.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-03"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 515.0,
		"lowPrice": 30.0,
		"highPrice": 60.0,
		"averagePrice": 35.0,
		type: Type.VEGETABLE,
		"date": "2024-09-05"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1210.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 44.0,
		type: Type.VEGETABLE,
		"date": "2024-09-06"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1853.0,
		"lowPrice": 30.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-07"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 7.0,
		"highPrice": 10.0,
		"averagePrice": 7.0,
		type: Type.VEGETABLE,
		"date": "2024-09-09"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-10"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 35.0,
		type: Type.VEGETABLE,
		"date": "2024-09-12"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 3275.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 36.0,
		type: Type.VEGETABLE,
		"date": "2024-09-13"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1150.0,
		"lowPrice": 40.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-14"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 475.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-16"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 305.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-17"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 375.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-19"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 2145.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-20"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 500.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-21"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-23"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 745.0,
		"lowPrice": 30.0,
		"highPrice": 35.0,
		"averagePrice": 35.0,
		type: Type.VEGETABLE,
		"date": "2024-09-24"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 500.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 35.0,
		type: Type.VEGETABLE,
		"date": "2024-09-26"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 700.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-27"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 577.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-09-28"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 590.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-09-30"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 405.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-10-01"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1350.0,
		"lowPrice": 30.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-10-03"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 730.0,
		"lowPrice": 30.0,
		"highPrice": 44.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-10-04"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 805.0,
		"lowPrice": 30.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-10-05"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 675.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-10-07"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 188.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-10-08"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 500.0,
		"lowPrice": 40.0,
		"highPrice": 50.0,
		"averagePrice": 50.0,
		type: Type.VEGETABLE,
		"date": "2024-10-10"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 30.0,
		"highPrice": 50.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-10-11"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 65.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-10-12"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 360.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 35.0,
		type: Type.VEGETABLE,
		"date": "2024-10-14"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 550.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 40.0,
		type: Type.VEGETABLE,
		"date": "2024-10-15"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 34.0,
		type: Type.VEGETABLE,
		"date": "2024-10-17"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 825.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 36.0,
		type: Type.VEGETABLE,
		"date": "2024-10-18"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 805.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-10-19"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 360.0,
		"lowPrice": 30.0,
		"highPrice": 30.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-10-21"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 560.0,
		"lowPrice": 30.0,
		"highPrice": 30.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-10-22"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 125.0,
		"lowPrice": 30.0,
		"highPrice": 40.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-10-24"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 950.0,
		"lowPrice": 20.0,
		"highPrice": 30.0,
		"averagePrice": 24.0,
		type: Type.VEGETABLE,
		"date": "2024-10-25"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1445.0,
		"lowPrice": 20.0,
		"highPrice": 30.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-10-26"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 700.0,
		"lowPrice": 20.0,
		"highPrice": 30.0,
		"averagePrice": 30.0,
		type: Type.VEGETABLE,
		"date": "2024-10-28"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 550.0,
		"lowPrice": 20.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-10-29"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 14.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-01"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 20.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-02"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 575.0,
		"lowPrice": 20.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-04"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 895.0,
		"lowPrice": 20.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-05"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 825.0,
		"lowPrice": 20.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-07"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 580.0,
		"lowPrice": 20.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-08"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 3100.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 15.0,
		type: Type.VEGETABLE,
		"date": "2024-11-09"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 15.0,
		type: Type.VEGETABLE,
		"date": "2024-11-11"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 525.0,
		"lowPrice": 10.0,
		"highPrice": 15.0,
		"averagePrice": 15.0,
		type: Type.VEGETABLE,
		"date": "2024-11-12"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 625.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 15.0,
		type: Type.VEGETABLE,
		"date": "2024-11-14"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 655.0,
		"lowPrice": 10.0,
		"highPrice": 15.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-11-15"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 375.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 16.0,
		type: Type.VEGETABLE,
		"date": "2024-11-16"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 15.0,
		type: Type.VEGETABLE,
		"date": "2024-11-18"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 565.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-19"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 950.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-21"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 560.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-22"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 520.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-23"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 450.0,
		"lowPrice": 20.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-11-25"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1225.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 14.0,
		type: Type.VEGETABLE,
		"date": "2024-11-26"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 850.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-11-28"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 975.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-11-29"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1250.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 20.0,
		type: Type.VEGETABLE,
		"date": "2024-12-02"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1250.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-03"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 14.0,
		type: Type.VEGETABLE,
		"date": "2024-12-05"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 325.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-06"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 170.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-07"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 375.0,
		"lowPrice": 10.0,
		"highPrice": 20.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-09"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 350.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-10"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1225.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-12"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 575.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-13"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 670.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-14"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 475.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-16"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 775.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-17"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 300.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-19"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 410.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-20"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 1900.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-21"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 200.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-23"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 650.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-24"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 985.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-26"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 410.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-27"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 265.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-28"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 285.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-30"
	},
	{
		"id": 1,
		"name": "Angive",
		unitOfMeasure: Unit.KG,
		"totalSold": 300.0,
		"lowPrice": 10.0,
		"highPrice": 10.0,
		"averagePrice": 10.0,
		type: Type.VEGETABLE,
		"date": "2024-12-31"
	}
]
