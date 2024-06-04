import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "replaceBaton",
	standalone: true
})
export class ReplaceBatonPipe implements PipeTransform {

	transform(value: string): unknown {
		if (!value || !value.includes("Baton")) {
			return value;
		}
		return value.replace("Baton", "B.");
	}

}
