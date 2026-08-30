import {RatedRole} from "./rated-role.enum";

export interface Rating {
	id: string;
	tripId: string;
	raterUserId: string;
	raterName: string;
	ratedUserId: string;
	role: RatedRole | string;
	score: number;
	comment: string;
	createdAt: string;
}

export interface CreateRatingRequest {
	tripId: string;
	ratedUserId: string;
	role: RatedRole | string;
	score: number;
	comment: string;
}
