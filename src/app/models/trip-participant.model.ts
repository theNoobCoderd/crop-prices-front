import {GeoLocation} from "./geo-location.model";

export interface TripParticipant {
	id: string;
	username: string;
	phone: string;
	region: string;
	location: GeoLocation | null;
	averageRating: number;
	totalRatings: number;
	completedTripsAsCollector: number;
	completedTripsAsContributor: number;
}
