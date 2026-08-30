import {GeoLocation} from "./geo-location.model";
import {CommissionType} from "./commission-type.enum";
import {TripStatus} from "./trip-status.enum";
import {TripParticipant} from "./trip-participant.model";

export interface MarketTrip {
	id: string;
	collector: TripParticipant;
	meetingPoint: GeoLocation;
	travelDate: string;
	cutoffTime: string;
	capacityWeightKg: number | null;
	commissionType: CommissionType | string;
	commissionValue: number;
	status: TripStatus | string;
	notes: string;
	createdDate: string;
}

export interface CreateTripRequest {
	meetingPoint: GeoLocation;
	travelDate: string;
	cutoffTime: string;
	capacityWeightKg: number | null;
	commissionType: CommissionType | string;
	commissionValue: number;
	notes: string;
}
