import { Component, ViewEncapsulation } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DashboardService } from '../../Services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProgressBarModule, ChartModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [DashboardService],
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  dashData: any;
  data1: any;
  data2: any;
  labels: any[] = [];
  options1: any;
  options2: any;
  reviews: any[] = [];
  soldTickets: any[] = [];

  constructor(private DashboardService: DashboardService) {}

  ngOnInit(): void {
    this.DashboardService.getDashboard().subscribe({
      next: (data) => {
        this.dashData = data;
        // console.log(this.dashData);

        for (let i = 0; i < this.dashData?.dashb.movieStatistics.length; i++) {
          this.labels.push(this.dashData.dashb.movieStatistics[i].Title);
          this.reviews.push(this.dashData.dashb.movieStatistics[i].reviewsNum);
          this.soldTickets.push(
            this.dashData.dashb.movieStatistics[i].soldTickets
          );
        }

        // console.log(this.labels);

        // Call the function to update the chart data
        this.updateChartData1();
        this.updateChartData2();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateChartData1() {
    const documentStyle1 = getComputedStyle(document.documentElement);
    const textColor1 = documentStyle1.getPropertyValue('--color-chart3');
    const textColorSecondary1 =
      documentStyle1.getPropertyValue('--color-chart3');
    const surfaceBorder1 = documentStyle1.getPropertyValue('--color-chart4');

    this.data1 = {
      labels: this.labels.slice(0, 20),
      datasets: [
        {
          label: 'Reviews',
          backgroundColor: documentStyle1.getPropertyValue('--color-chart2'),
          borderColor: documentStyle1.getPropertyValue('--color-chart2'),
          data: this.reviews.slice(0, 20),
        },
        {
          label: 'SoldTickets',
          backgroundColor: documentStyle1.getPropertyValue('--color-chart1'),
          borderColor: documentStyle1.getPropertyValue('--color-chart1'),
          data: this.soldTickets.slice(0, 20),
        },
      ],
    };

    this.options1 = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor1,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary1,
            font: {
              weight: 500,
              size: 7,
            },
          },
          grid: {
            color: surfaceBorder1,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary1,
          },
          grid: {
            color: surfaceBorder1,
            drawBorder: false,
          },
        },
      },
    };
  }
  updateChartData2() {
    const documentStyle2 = getComputedStyle(document.documentElement);
    const textColor2 = documentStyle2.getPropertyValue('--color-chart3');
    const textColorSecondary2 =
      documentStyle2.getPropertyValue('--color-chart3');
    const surfaceBorder2 = documentStyle2.getPropertyValue('--color-chart4');

    this.data2 = {
      labels: this.labels.slice(20),
      datasets: [
        {
          label: 'Reviews',
          backgroundColor: documentStyle2.getPropertyValue('--color-chart2'),
          borderColor: documentStyle2.getPropertyValue('--color-chart2'),
          data: this.reviews.slice(20),
        },
        {
          label: 'SoldTickets',
          backgroundColor: documentStyle2.getPropertyValue('--color-chart1'),
          borderColor: documentStyle2.getPropertyValue('--color-chart1'),
          data: this.soldTickets.slice(20),
        },
      ],
    };

    this.options2 = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor2,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary2,
            font: {
              weight: 500,
              size: 7,
            },
          },
          grid: {
            color: surfaceBorder2,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary2,
          },
          grid: {
            color: surfaceBorder2,
            drawBorder: false,
          },
        },
      },
    };
  }
}
