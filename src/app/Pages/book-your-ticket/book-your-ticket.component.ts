import { Component, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-your-ticket',
  standalone: true,
  templateUrl: './book-your-ticket.component.html',
  styleUrl: './book-your-ticket.component.scss',
  imports: [
    FooterComponent,
    FormsModule,
    RatingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BookYourTicketComponent {
  value = 4;
  totalPrice = 0;
  takenSeats: {}[] = [];
  tickets: number = 0;
  rows: string = '';
  firstRow = [
    { num: 1, isTaken: false, row: 1 },
    { num: 2, isTaken: false, row: 1 },
    { num: 3, isTaken: false, row: 1 },
    { num: 4, isTaken: true, row: 1 },
    { num: 5, isTaken: false, row: 1 },
    { num: 6, isTaken: false, row: 1 },
    { num: 7, isTaken: false, row: 1 },
    { num: 8, isTaken: false, row: 1 },
    { num: 9, isTaken: false, row: 1 },
    { num: 10, isTaken: false, row: 1 },
    { num: 11, isTaken: false, row: 1 },
  ];
  secondRow = [
    { num: 1, isTaken: false, row: 2 },
    { num: 2, isTaken: false, row: 2 },
    { num: 3, isTaken: false, row: 2 },
    { num: 4, isTaken: false, row: 2 },
    { num: 5, isTaken: false, row: 2 },
    { num: 6, isTaken: false, row: 2 },
    { num: 7, isTaken: true, row: 2 },
    { num: 8, isTaken: false, row: 2 },
    { num: 9, isTaken: false, row: 2 },
    { num: 10, isTaken: true, row: 2 },
    { num: 11, isTaken: false, row: 2 },
  ];
  thirdRow = [
    { num: 1, isTaken: true, row: 3 },
    { num: 2, isTaken: false, row: 3 },
    { num: 3, isTaken: false, row: 3 },
    { num: 4, isTaken: false, row: 3 },
    { num: 5, isTaken: false, row: 3 },
    { num: 6, isTaken: false, row: 3 },
    { num: 7, isTaken: false, row: 3 },
    { num: 8, isTaken: false, row: 3 },
    { num: 9, isTaken: false, row: 3 },
    { num: 10, isTaken: false, row: 3 },
    { num: 11, isTaken: false, row: 3 },
    { num: 12, isTaken: false, row: 3 },
    { num: 13, isTaken: true, row: 3 },
  ];
  fourthRow = [
    { num: 1, isTaken: true, row: 4 },
    { num: 2, isTaken: false, row: 4 },
    { num: 3, isTaken: false, row: 4 },
    { num: 4, isTaken: false, row: 4 },
    { num: 5, isTaken: false, row: 4 },
    { num: 6, isTaken: false, row: 4 },
    { num: 7, isTaken: false, row: 4 },
    { num: 8, isTaken: false, row: 4 },
    { num: 9, isTaken: false, row: 4 },
    { num: 10, isTaken: false, row: 4 },
    { num: 11, isTaken: false, row: 4 },
    { num: 12, isTaken: false, row: 4 },
    { num: 13, isTaken: true, row: 4 },
  ];
  fifthRow = [
    { num: 1, isTaken: true, row: 5 },
    { num: 2, isTaken: false, row: 5 },
    { num: 3, isTaken: false, row: 5 },
    { num: 4, isTaken: false, row: 5 },
    { num: 5, isTaken: false, row: 5 },
    { num: 6, isTaken: false, row: 5 },
    { num: 7, isTaken: false, row: 5 },
    { num: 8, isTaken: false, row: 5 },
    { num: 9, isTaken: false, row: 5 },
    { num: 10, isTaken: false, row: 5 },
    { num: 11, isTaken: false, row: 5 },
    { num: 12, isTaken: false, row: 5 },
    { num: 13, isTaken: true, row: 5 },
    { num: 14, isTaken: true, row: 5 },
    { num: 15, isTaken: true, row: 5 },
    { num: 16, isTaken: true, row: 5 },
    { num: 17, isTaken: true, row: 5 },
  ];
  sixth = [
    { num: 1, isTaken: true, row: 6 },
    { num: 2, isTaken: false, row: 6 },
    { num: 3, isTaken: false, row: 6 },
    { num: 4, isTaken: false, row: 6 },
    { num: 5, isTaken: false, row: 6 },
    { num: 6, isTaken: false, row: 6 },
    { num: 7, isTaken: false, row: 6 },
    { num: 8, isTaken: false, row: 6 },
    { num: 9, isTaken: false, row: 6 },
    { num: 10, isTaken: false, row: 6 },
    { num: 11, isTaken: false, row: 6 },
    { num: 12, isTaken: false, row: 6 },
    { num: 13, isTaken: true, row: 6 },
    { num: 14, isTaken: true, row: 6 },
    { num: 15, isTaken: true, row: 6 },
    { num: 16, isTaken: true, row: 6 },
    { num: 17, isTaken: true, row: 6 },
  ];
  siventh = [
    { num: 1, isTaken: true, row: 7 },
    { num: 2, isTaken: false, row: 7 },
    { num: 3, isTaken: false, row: 7 },
    { num: 4, isTaken: false, row: 7 },
    { num: 5, isTaken: false, row: 7 },
    { num: 6, isTaken: false, row: 7 },
    { num: 7, isTaken: false, row: 7 },
    { num: 8, isTaken: false, row: 7 },
    { num: 9, isTaken: false, row: 7 },
    { num: 10, isTaken: false, row: 7 },
    { num: 11, isTaken: false, row: 7 },
    { num: 12, isTaken: false, row: 7 },
    { num: 13, isTaken: true, row: 7 },
    { num: 14, isTaken: true, row: 7 },
    { num: 15, isTaken: true, row: 7 },
    { num: 16, isTaken: true, row: 7 },
    { num: 17, isTaken: true, row: 7 },
  ];
  eight = [
    { num: 1, isTaken: true, row: 8 },
    { num: 2, isTaken: false, row: 8 },
    { num: 3, isTaken: false, row: 8 },
    { num: 4, isTaken: false, row: 8 },
    { num: 5, isTaken: false, row: 8 },
    { num: 6, isTaken: false, row: 8 },
    { num: 7, isTaken: false, row: 8 },
    { num: 8, isTaken: false, row: 8 },
    { num: 9, isTaken: false, row: 8 },
    { num: 10, isTaken: false, row: 8 },
    { num: 11, isTaken: false, row: 8 },
    { num: 12, isTaken: false, row: 8 },
    { num: 13, isTaken: true, row: 8 },
  ];
  cinemas = [
    'VOX Cinemas ',
    'Zamalek Cinema',
    'Galaxy Cinema',
    'IMAX at Premiere',
    'Point 90 Cinema',
    'Americana Plaza Cinema',
    'Culturama Historical Cinema',
  ];
  screens = ['IMAX', '3D', '2D', 'Regular'];
  time = [
    '12:00 pm',
    '03:00 pm',
    '06:00 pm',
    '09:00 pm',
    '12:00 am',
    '10:00 am',
  ];
  choosenCinema: any;
  choosenScreen: any;
  choosenDateForDisplay: string = '';
  choosenDate: string = '';
  choosenTime: any;
  formateDate(date: string) {
    let res = [];
    res.push(date.toString().split(' ')[0]);
    res.push(date.toString().split(' ')[1]);
    res.push(date.toString().split(' ')[2]);
    res.push(date.toString().split(' ')[3]);
    this.choosenDateForDisplay = res.join(' ');
  }
  getSeat(seat: any, eve: any, i?: any) {
    //check if the seat is taken
    // console.log(eve.target);

    // this.isTakenByUser=true;
    if (!seat.isTaken) {
      seat.isTaken = true;
      this.takenSeats.push(seat);
      this.totalPrice += 100;
    }
    this.tickets = this.tickets + 1;
    this.rows += '' + seat.row + ',';
  }
}
