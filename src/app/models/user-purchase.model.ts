import {HistoryGraphModel} from "./history-graph.model";

export interface UserPurchaseModel {
	id: number;
	authId: string;
	rangeStartDate: string;
	rangeEndDate: string;
	historyDTO: HistoryGraphModel;
}
