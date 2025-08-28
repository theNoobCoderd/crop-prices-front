import {Unit} from "./unit.enum";
import {Type} from "./type.enum";

export interface HistoryGraphModel {
	vegetableName: string;
	unit: Unit;
	lowestPrices: number[];
	mostCommonPrices: number[];
	highestPrices: number[];
	totalSoldList: number[];
	dates: string[];
	revenue: number[];
	lowestPrice: number;
	averagePrice: number;
	highestPrice: number;
}
