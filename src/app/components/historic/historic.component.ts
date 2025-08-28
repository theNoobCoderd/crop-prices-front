import {Component, OnDestroy} from "@angular/core";
import {HistoricService} from "../../services/historic/historic.service";
import {BehaviorSubject, Observable, of, Subject, takeUntil, timer} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {GRAPH_TWO} from "../../../assets/mocks/mock-data";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../constants/drop-down-values";
import {DropDownComponent} from "../lib/drop-down/drop-down.component";
import {MatTableModule} from "@angular/material/table";
import {HistoryGraphModel} from "../../models/history-graph.model";
import {Type} from "../../models/type.enum";
import {DATE_RANGES} from "../../constants/date-ranges";
import {AsyncPipe, NgForOf} from "@angular/common";
import {average} from "@angular/fire/firestore";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {UserService} from "../../services/user/user.service";

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
		MatSelectModule
	],
	templateUrl: "./historic.component.html",
	standalone: true,
	styleUrl: "./historic.component.less"
})
export class HistoricComponent implements OnDestroy {

	// chart settings
	lineChartData: ChartConfiguration<'line'>['data'] | undefined;
	barChartData: ChartConfiguration<'bar'>['data'] | undefined;
	averageRevenueChart: ChartConfiguration<'line'>['data'] | undefined;

	// @ts-ignore
	lineChartOptions: ChartOptions<'line'> = {
		plugins: {
			legend: {
				position: "bottom",
			}
		},
		responsive: true,
		maintainAspectRatio: false,
		spanGaps: true,
		elements: {
			point: {
				radius: 0,
				backgroundColor: 'rgba(255, 255, 255, 1)',
			}
		},
		scales: {
			x: {
				border: {
					dash: [5, 5]
				},
			},
			y: {
				suggestedMax: 100,
				suggestedMin: 10,
				border: {
					dash: [5, 5]
				},
			}
		},
		interaction: {
			mode: "index",
			intersect: false
		},
	};
	barChartOptions: ChartOptions<'bar'> = {
		plugins: {
			legend: {
				position: "bottom",
			}
		},
		responsive: true,
		maintainAspectRatio: false,
		interaction: {
			mode: "index",
			intersect: false
		},
		scales: {
			// Primary y-axis (for bar charts)
			y: {
				type: 'linear',
				position: 'left',
				title: {
					display: true,
					text: 'Bar Chart Values'
				},
				grid: {
					drawOnChartArea: false // only show grid lines for primary y-axis
				}
			},
			// Secondary y-axis (for line chart)
			y1: {
				type: 'linear',
				position: 'right',
				title: {
					display: true,
					text: 'Line Chart Values'
				},
				grid: {
					drawOnChartArea: false
				}
			}
		},
	};

	// table settings
	displayedColumns: string[] = ['date', 'lowPrice', 'highPrice', 'averagePrice', 'totalSold', 'revenue'];
	dataSource: Vegetable[] = [];

	historyParamForm: FormGroup;

	cropHistory$: Observable<HistoryGraphModel> | undefined;
	lowestPrice$ = new BehaviorSubject<number>(0);
	highestPrice$ = new BehaviorSubject<number>(0);
	averagePrice$ = new BehaviorSubject<number>(0);

	isLoading$ = new BehaviorSubject<boolean>(false);
	hasData$ = new BehaviorSubject<boolean>(false);

	private _destroy$ = new Subject<void>();

	constructor(private _historicService: HistoricService, private _formBuilder: FormBuilder, private _userService: UserService) {
		this.historyParamForm = this._formBuilder.group({
			crop: [''],
			timeRange: ['7']
		});
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	onSubmit(): void {
		this.hasData$.next(false);
		this.isLoading$.next(true);

		const formValue = this.historyParamForm.value;

		this.cropHistory$ = this._historicService.getHistoricByName(this.historyParamForm.get('crop')?.value, this.historyParamForm.get('timeRange')?.value);
		this.cropHistory$.pipe(takeUntil(this._destroy$)).subscribe((crops => {

			setTimeout(()=>{
				this.lowestPrice$.next(crops.lowestPrice);
				this.highestPrice$.next(crops.highestPrice);
				this.averagePrice$.next(crops.averagePrice);

				this.dataSource = this._transformData(crops);

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

				this.isLoading$.next(false);
				this.hasData$.next(true);
			}, 1000)
		}));
	}

	selectTime(value: string) {
		this.historyParamForm.get('timeRange')?.setValue(value);
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
}
