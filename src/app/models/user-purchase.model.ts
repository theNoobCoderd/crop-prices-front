import {Unit} from "./unit.enum";
import {Type} from "./type.enum";
import {HistoryGraphModel} from "./history-graph.model";

export interface UserPurchaseModel {
	id: number;
	authId: string;
	rangeStartDate: string;
	rangeEndDate: string;
	historyDTO: HistoryGraphModel;
}
