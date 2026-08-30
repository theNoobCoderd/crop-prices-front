import {GeoLocation} from "./geo-location.model";
import {ContributionStatus} from "./contribution-status.enum";
import {TripParticipant} from "./trip-participant.model";
import {Type} from "./type.enum";
import {Unit} from "./unit.enum";

export interface TripContribution {
	id: string;
	tripId: string;
	farmer: TripParticipant;
	produceName: string;
	produceType: Type | string;
	unit: Unit | string;
	quantity: number;
	askingPrice: number;
	pickupPoint: GeoLocation;
	status: ContributionStatus | string;
	actualSoldPrice: number | null;
	actualSoldQuantity: number | null;
	notes: string;
	createdDate: string;
}

export interface JoinTripRequest {
	produceName: string;
	produceType: Type | string;
	unit: Unit | string;
	quantity: number;
	askingPrice: number;
	pickupPoint: GeoLocation;
	notes: string;
}

export interface SettleContributionRequest {
	actualSoldPrice: number;
	actualSoldQuantity: number;
}
