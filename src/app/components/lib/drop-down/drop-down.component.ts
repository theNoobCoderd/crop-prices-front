import {Component, forwardRef, Injector, Input, Optional, Self} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

export interface DropdownOption {
	id: string | number;
	name: string;
	value: string;
}

@Component({
	selector: 'app-drop-down',
	imports: [
		ReactiveFormsModule,
		NgForOf,
		FormsModule
	],
	templateUrl: './drop-down.component.html',
	styleUrl: './drop-down.component.less',
	standalone: true,
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

	private ngControl: NgControl | null = null;

	value: string | number = '';
	disabled = false;

	constructor(private injector: Injector) {}

	ngOnInit() {
		// Get the NgControl after initialization to avoid circular dependency
		this.ngControl = this.injector.get(NgControl, null);
	}

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

	onBlur(): void {
		this.onTouched(); // Make sure this is called on blur
	}

	get formControl() {
		return this.ngControl?.control;
	}
}
