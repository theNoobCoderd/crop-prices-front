import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

export interface DropdownOption {
	id: string | number;
	name: string;
}

@Component({
  selector: 'app-drop-down',
	imports: [
		ReactiveFormsModule,
		NgForOf
	],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.less',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DropDownComponent),
			multi: true
		}
	]
})
export class DropDownComponent implements ControlValueAccessor {
	@Input() id: string = '';
	@Input() placeholder: string = 'Select an option';
	@Input() options: DropdownOption[] = [];

	value: string | number = '';
	disabled = false;

	// ControlValueAccessor methods
	onChange = (value: string | number) => {};
	onTouched = () => {};

	onSelectionChange(event: Event): void {
		const target = event.target as HTMLSelectElement;
		this.value = target.value;
		this.onChange(this.value);
	}

	writeValue(value: string | number): void {
		this.value = value || '';
	}

	registerOnChange(fn: (value: string | number) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	trackByFn(index: number, item: DropdownOption): string | number {
		return item.id;
	}
}
