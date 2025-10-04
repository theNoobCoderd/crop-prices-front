// @ts-ignore
import {ChartOptions} from "chart.js";

export const lineChartOptions: ChartOptions<'line'> = {
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


export const barChartOptions: ChartOptions<'bar'> = {
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
