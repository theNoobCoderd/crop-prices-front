import {Component, OnInit} from "@angular/core";
import {HistoricService} from "../../services/historic/historic.service";
import {Observable, of} from "rxjs";
import {Vegetable} from "../../models/vegetable.model";
import {ChartConfiguration, ChartOptions} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {GRAPH_ONE} from "../../../assets/mocks/mock-data";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DROP_DOWN_VALUE} from "../../constants/drop-down-values";
import {DropDownComponent} from "../lib/drop-down/drop-down.component";
import {NgForOf} from "@angular/common";

@Component({
    selector: "app-historic",
	imports: [
		BaseChartDirective,
		ReactiveFormsModule,
		DropDownComponent,
		NgForOf
	],
    templateUrl: "./historic.component.html",
    styleUrl: "./historic.component.less"
})
export class HistoricComponent implements OnInit {

	lineChartData: ChartConfiguration<'line'>['data'] | undefined;

	barChartData: ChartConfiguration<'bar'>['data'] | undefined;

	averageRevenueChart: ChartConfiguration<'line'>['data'] | undefined;

	historyParamForm: FormGroup;
	timeOptions = [
		{ label: '7 Days', value: '7' },
		{ label: '30 Days', value: '30' },
		{ label: '90 Days', value: '90' },
		{ label: 'All Time', value: '1000' }
	];

	// @ts-ignore
	lineChartOptions: ChartOptions<'line'> = {
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

	lineChartLegend = true;

	constructor(private _historicService: HistoricService, private _formBuilder: FormBuilder) {
		this.historyParamForm = this._formBuilder.group({
			crop: [''],
			timeRange: ['7']
		});

		console.log(this.historyParamForm.get('timeRange')?.value);
	}

	crops$: Observable<Vegetable[]> | undefined;

	ngOnInit(): void {
	}

	onSubmit(): void {
		const formValue = this.historyParamForm.value;
		console.log(formValue);

		// this.crops$ = this._historicService.getHistoricByName("Angive");
		this.crops$ = of(GRAPH_ONE);
		this.crops$.subscribe((crops => {
			var limitedDates = crops.slice(1, 10);
			var dates = limitedDates.map((crop) => crop.date);
			var averagePrices = limitedDates
				.map((crop) => crop.averagePrice === 0 ? null : crop.averagePrice);

			var highPrices = limitedDates
				.map((crop) => crop.highPrice === 0 ? null : crop.highPrice);

			var lowPrices = limitedDates
				.map((crop) => crop.lowPrice === 0 ? null : crop.lowPrice);

			var totalSold = limitedDates.map((crop) => crop.totalSold);

			var averageRevenu = limitedDates.map((crop) => crop.averagePrice * crop.totalSold);

			this.lineChartData = {
				labels: dates,
				datasets: [
					{
						data: averagePrices,
						label: 'Average',
						tension: 0.3,
						borderColor: 'rgba(59, 130, 246, 1)',
						borderWidth: 1,
					},
					{
						data: highPrices,
						label: 'High',
						tension: 0.3,
						borderColor: 'rgba(130, 202, 157, .6)',
						borderWidth: 1,
					},
					{
						data: lowPrices,
						label: 'Low',
						tension: 0.3,
						borderColor: 'rgba(246,181,59, .6)',
						borderWidth: 1,
					}
				]
			};

			this.barChartData = {
				labels: dates,
				datasets: [
					{
						type: "bar" as const,
						data: totalSold,
						label: 'total sold',
						yAxisID: "y"
					},
					{
						// @ts-ignore
						type: "line" as const,
						spanGaps: true,
						data: averagePrices,
						tension: 0.3,
						label: 'average',
						yAxisID: "y1"
					}
				]
			}

			this.averageRevenueChart = {
				labels: dates,
				datasets: [
					{
						data: averageRevenu,
						label: 'Revenu',
						tension: 0.3,
						borderColor: 'rgba(59, 130, 246, 1)',
						borderWidth: 1,
						fill: true,
						backgroundColor: 'rgba(142,180,246, 0.3)'
					}
				]
			};

		}));
	}

	selectTime(value: string) {
		this.historyParamForm.get('timeRange')?.setValue(value);
	}

	protected readonly DROP_DOWN_VALUE = DROP_DOWN_VALUE;
}
