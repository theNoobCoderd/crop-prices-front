import {District} from "./district.enum";

export interface GeoLocation {
	district: District | string;
	locality: string;
	latitude: number | null;
	longitude: number | null;
}
