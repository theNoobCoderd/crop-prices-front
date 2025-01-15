import {Unit} from "./unit.enum";
import {Type} from "./type.enum";

export interface Vegetable {
	id: number;
	name: string;
	unitOfMeasure: Unit;
	totalSold: number;
	lowPrice: number;
	highPrice: number;
	averagePrice: number;
	type: Type;
	date: string;
}
