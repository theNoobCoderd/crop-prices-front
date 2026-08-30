import {DropDownValue} from "../models/drop-down-value.model";
import {District} from "../models/district.enum";

export const DISTRICTS = [
	{id: 1, value: District.BLACK_RIVER, name: "Black River"},
	{id: 2, value: District.FLACQ, name: "Flacq"},
	{id: 3, value: District.GRAND_PORT, name: "Grand Port"},
	{id: 4, value: District.MOKA, name: "Moka"},
	{id: 5, value: District.PAMPLEMOUSSES, name: "Pamplemousses"},
	{id: 6, value: District.PLAINES_WILHEMS, name: "Plaines Wilhems"},
	{id: 7, value: District.PORT_LOUIS, name: "Port Louis"},
	{id: 8, value: District.RIVIERE_DU_REMPART, name: "Riviere du Rempart"},
	{id: 9, value: District.SAVANNE, name: "Savanne"},
	{id: 10, value: District.RODRIGUES, name: "Rodrigues"},
] as DropDownValue[];
