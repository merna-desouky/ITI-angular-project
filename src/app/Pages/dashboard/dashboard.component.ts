import { Component, ViewEncapsulation } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProgressBarModule, ChartModule],
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--red-900'),
            documentStyle.getPropertyValue('--red-100'),
          ],
          //   hoverBackgroundColor: [
          //     documentStyle.getPropertyValue('--white'),
          //     documentStyle.getPropertyValue('--yellow-400'),
          //     documentStyle.getPropertyValue('--green-400'),
          //   ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: 'white',
          },
        },
      },
    };
  }
}
