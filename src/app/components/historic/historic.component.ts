import {Component, inject, input, Input, OnDestroy, OnInit} from "@angular/core";
import {HistoricService} from "../../services/historic/historic.service";
import {BehaviorSubject, Observable, Subject, takeUntil} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../constants/drop-down-values";
import {DropDownComponent} from "../lib/drop-down/drop-down.component";
import {MatTableModule} from "@angular/material/table";
import {HistoryGraphModel} from "../../models/history-graph.model";
import {Type} from "../../models/type.enum";
import {DATE_RANGES} from "../../constants/date-ranges";
import {AsyncPipe, DecimalPipe, NgForOf} from "@angular/common";
import {average} from "@angular/fire/firestore";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {UserService} from "../../services/user/user.service";
import {
	MatDialog,
} from '@angular/material/dialog';
import {MatDialogComponent} from "../lib/mat-dialog/mat-dialog.component";
import {LoginComponent} from "../login/login.component";
import {Router} from "@angular/router";
import {barChartOptions, lineChartOptions} from "./chart-settings/chart-settings";

@Component({
	selector: "app-historic",
	imports: [
		BaseChartDirective,
		ReactiveFormsModule,
		DropDownComponent,
		MatTableModule,
		NgForOf,
		AsyncPipe,
		MatProgressSpinnerModule,
		MatSelectModule,
		DecimalPipe,
		LoginComponent
	],
	templateUrl: "./historic.component.html",
	standalone: true,
	styleUrl: "./historic.component.less"
})
export class HistoricComponent implements OnDestroy {

	userService = inject(UserService);
	router = inject(Router);

	// chart settings
	lineChartData: ChartConfiguration<'line'>['data'] | undefined;
	barChartData: ChartConfiguration<'bar'>['data'] | undefined;
	averageRevenueChart: ChartConfiguration<'line'>['data'] | undefined;

	premiumOptionSelected$ = new BehaviorSubject<boolean>(false);

	historicDataAsInput!: HistoryGraphModel;

	readonly dialog = inject(MatDialog);

	// table settings
	displayedColumns: string[] = ['date', 'lowPrice', 'highPrice', 'averagePrice', 'totalSold', 'revenue'];
	dataSource: Vegetable[] = [];
	displayedData: Vegetable[] = [];

	historyParamForm: FormGroup;

	cropHistory$: Observable<HistoryGraphModel> | undefined;
	lowestPrice$ = new BehaviorSubject<number>(0);
	highestPrice$ = new BehaviorSubject<number>(0);
	averagePrice$ = new BehaviorSubject<number>(0);

	isLoading$ = new BehaviorSubject<boolean>(false);
	hasData$ = new BehaviorSubject<boolean>(false);

	private _destroy$ = new Subject<void>();
	private readonly pageSize = 10;
	private currentIndex = 10;

	constructor(private _historicService: HistoricService, private _formBuilder: FormBuilder) {
		this.historyParamForm = this._formBuilder.group({
			crop: ['', Validators.required],
			timeRange: ['7', Validators.required],
		});

		const navigation = this.router.getCurrentNavigation();
		if (navigation?.extras?.state) {
			const inputData = navigation.extras.state['data'];
			this.historicDataAsInput = inputData.historyDTO;

			if (this.historicDataAsInput) {
				this.dataSource = this._transformData(this.historicDataAsInput);
				this.displayedData = this.dataSource.slice(0, this.pageSize);
				this._buildCharts(this.historicDataAsInput);

				this.isLoading$.next(false);
				this.hasData$.next(true);
			}
		}
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	onSubmit(): void {
		this.hasData$.next(false);
		this.isLoading$.next(true);

		this.cropHistory$ = this._historicService.getHistoricByName(this.historyParamForm.get('crop')?.value, this.historyParamForm.get('timeRange')?.value);
		this.cropHistory$.pipe(takeUntil(this._destroy$)).subscribe((crops => {

			setTimeout(()=> {
				this.dataSource = this._transformData(crops);

				this._buildCharts(crops)

				this.isLoading$.next(false);
				this.hasData$.next(true);
			}, 1000)
		}));
	}

	selectTime(value: string) {
		if (value != "7") {
			this.dialog.open(MatDialogComponent);
			this.premiumOptionSelected$.next(true);
		} else {
			this.premiumOptionSelected$.next(false);
		}
		this.historyParamForm.get('timeRange')?.setValue(value);
	}

	showMore() {
		this.currentIndex += (this.pageSize * 3);
		this.displayedData = this.dataSource.slice(0, this.currentIndex);
	}

	private _buildCharts(crops: HistoryGraphModel): void {
		this.lowestPrice$.next(crops.lowestPrice);
		this.highestPrice$.next(crops.highestPrice);
		this.averagePrice$.next(crops.averagePrice);

		this.lineChartData = {
			labels: crops.dates,
			datasets: [
				{
					data: crops.mostCommonPrices,
					label: 'Average',
					tension: 0.3,
					borderColor: 'rgba(59, 130, 246, 1)',
					borderWidth: 1,
				},
				{
					data: crops.highestPrices,
					label: 'High',
					tension: 0.3,
					borderColor: 'rgba(130, 202, 157, .6)',
					borderWidth: 1,
				},
				{
					data: crops.lowestPrices,
					label: 'Low',
					tension: 0.3,
					borderColor: 'rgba(246,181,59, .6)',
					borderWidth: 1,
				}
			]
		};

		this.barChartData = {
			labels: crops.dates,
			datasets: [
				{
					type: "bar" as const,
					data: crops.totalSoldList,
					label: 'total sold',
					yAxisID: "y"
				},
				{
					// @ts-ignore
					type: "line" as const,
					spanGaps: true,
					data: crops.mostCommonPrices,
					tension: 0.3,
					label: 'average',
					yAxisID: "y1"
				}
			]
		}

		this.averageRevenueChart = {
			labels: crops.dates,
			datasets: [
				{
					data: crops.revenue,
					label: 'Revenue',
					tension: 0.3,
					borderColor: 'rgba(59, 130, 246, 1)',
					borderWidth: 1,
					fill: true,
					backgroundColor: 'rgba(142,180,246, 0.3)'
				}
			]
		};
	}

	private _transformData(data: HistoryGraphModel): Vegetable[] {
		return data.dates.map((date, index) => ({
			id: index + 1, // or generate a unique ID if needed
			name: data.vegetableName,
			unitOfMeasure: data.unit,
			totalSold: data.totalSoldList[index],
			lowPrice: data.lowestPrices[index],
			highPrice: data.highestPrices[index],
			averagePrice: data.mostCommonPrices[index], // Using mostCommon as average
			type: Type.VEGETABLE, // Assuming it's always vegetable
			date: date,
			revenue: data.revenue[index],
		}));
	}

	protected readonly DROP_DOWN_VALUE = DROP_DOWN_VALUE;
	protected readonly DATE_RANGES = DATE_RANGES;
	protected readonly average = average;
	protected readonly lineChartOptions = lineChartOptions;
	protected readonly barChartOptions = barChartOptions;
}
