import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { CinemaSeatComponent } from '../../Components/cinema-seat/cinema-seat.component';
import { TableComponent } from '../../Components/table/table.component';
import { SeatStateService } from '../../Services/seat-state.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingServiceService } from '../../Services/booking-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-your-ticket',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  encapsulation: ViewEncapsulation.None,
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
    CinemaSeatComponent,
    TableComponent,
    HttpClientModule,
  ],
  providers: [HttpClient],
})
export class BookingComponent implements OnInit, OnChanges, OnDestroy {
  cinemas = [];
  receivedMovieName: any = '';
  screens = ['3D', '2D', 'Regular'];
  time: {}[] = [];
  dates = [];
  showSeats: boolean = false;
  movie: any = {};
 
  objToSend: any;
  showOverlay: boolean = true;
  counter = 0;
  value = 4;
  totalPrice = 0;
  takenSeats: any[] = [];
  tickets: number = 0;
  rows: string = '';
  choosenCinema: any = '';
  choosenScreen: any = '';
  choosenDateForDisplay: string = '';
  choosenDate: string = '';
  choosenTime: any = '';
  seatNum: any;
  receivedSeatToDelete: any;
  reserviedSeats: any;

  firstRow: any;
  secondRow: any;
  thirdRow: any;
  fourthRow: any;
  fifthRow: any;
  sixth: any;
  siventh: any;
  eight: any;
  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params) => {
      this.receivedMovieName = params['movie-name'];
      console.log(this.receivedMovieName);
    });

    this.bookingService
      .getCinemas({ movie: this.receivedMovieName })
      .subscribe((data) => {
        this.cinemas = data;
      });

    this.bookingService
      .getMovieByName({ movie: this.receivedMovieName })
      .subscribe((data) => {
        this.movie = data;
      });
  }
  ngOnChanges() {}
  getDates() {
    this.bookingService
      .getDates({
        movie: this.receivedMovieName,
        cinema: this.choosenCinema,
      })
      .subscribe((data) => {
        this.dates = data;
      });
  }
  getTimes() {
    this.bookingService
      .getTimes({
        movie: this.receivedMovieName,
        cinema: this.choosenCinema,
        date: this.choosenDate,
      })
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          this.time.push(data[i].time);
        }
      });
  }

  constructor(
    private seatState: SeatStateService,
    public http: HttpClient,
    public bookingService: BookingServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy() {
    this.firstRow = [];
    this.secondRow = [];
    this.thirdRow = [];
    this.fourthRow = [];
    this.fifthRow = [];
    this.sixth = [];
    this.siventh = [];
    this.eight = [];
  }

  onInputChange() {
    this.showOverlay = false;
    this.bookingService
      .getReservedSeats({
        movie: this.receivedMovieName,
        cinema: this.choosenCinema,
        date: this.choosenDate,
        time: this.choosenTime,
      })
      .subscribe((data) => {
        this.reserviedSeats = data;
        console.log(this.reserviedSeats);
        this.firstRow = [
          { num: 1, isTaken: true, row: 1 },
          { num: 2, isTaken: true, row: 1 },
          { num: 3, isTaken: true, row: 1 },
          { num: 4, isTaken: false, row: 1 },
          { num: 5, isTaken: false, row: 1 },
          { num: 6, isTaken: false, row: 1 },
          { num: 7, isTaken: false, row: 1 },
          { num: 8, isTaken: false, row: 1 },
          { num: 9, isTaken: false, row: 1 },
          { num: 10, isTaken: false, row: 1 },
          { num: 11, isTaken: false, row: 1 },
        ];
        this.secondRow = [
          { num: 1, isTaken: false, row: 2 },
          { num: 2, isTaken: false, row: 2 },
          { num: 3, isTaken: false, row: 2 },
          { num: 4, isTaken: false, row: 2 },
          { num: 5, isTaken: false, row: 2 },
          { num: 6, isTaken: false, row: 2 },
          { num: 7, isTaken: false, row: 2 },
          { num: 8, isTaken: false, row: 2 },
          { num: 9, isTaken: false, row: 2 },
          { num: 10, isTaken: false, row: 2 },
          { num: 11, isTaken: false, row: 2 },
        ];
        this.thirdRow = [
          { num: 1, isTaken: false, row: 3 },
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
          { num: 13, isTaken: false, row: 3 },
        ];
        this.fourthRow = [
          { num: 1, isTaken: false, row: 4 },
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
          { num: 13, isTaken: false, row: 4 },
        ];
        this.fifthRow = [
          { num: 1, isTaken: false, row: 5 },
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
          { num: 13, isTaken: false, row: 5 },
          { num: 14, isTaken: false, row: 5 },
          { num: 15, isTaken: false, row: 5 },
          { num: 16, isTaken: false, row: 5 },
          { num: 17, isTaken: false, row: 5 },
        ];
        this.sixth = [
          { num: 1, isTaken: false, row: 6 },
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
          { num: 13, isTaken: false, row: 6 },
          { num: 14, isTaken: false, row: 6 },
          { num: 15, isTaken: false, row: 6 },
          { num: 16, isTaken: false, row: 6 },
          { num: 17, isTaken: false, row: 6 },
        ];
        this.siventh = [
          { num: 1, isTaken: false, row: 7 },
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
          { num: 13, isTaken: false, row: 7 },
          { num: 14, isTaken: false, row: 7 },
          { num: 15, isTaken: false, row: 7 },
          { num: 16, isTaken: false, row: 7 },
          { num: 17, isTaken: false, row: 7 },
        ];
        this.eight = [
          { num: 1, isTaken: false, row: 8 },
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
          { num: 13, isTaken: false, row: 8 },
        ];
        this.updateIsTaken(this.firstRow, this.reserviedSeats);
        this.updateIsTaken(this.secondRow, this.reserviedSeats);
        this.updateIsTaken(this.thirdRow, this.reserviedSeats);
        this.updateIsTaken(this.fourthRow, this.reserviedSeats);
        this.updateIsTaken(this.fifthRow, this.reserviedSeats);
        this.updateIsTaken(this.sixth, this.reserviedSeats);
        this.updateIsTaken(this.siventh, this.reserviedSeats);
        this.updateIsTaken(this.eight, this.reserviedSeats);
      });
    this.showSeats = true;
  }

  updateIsTaken(arrOfSeats: any, arrOfTakenSeats: any) {
    for (let i = 0; i < arrOfSeats.length; i++) {
      arrOfTakenSeats.forEach((ele: any) => {
        if (arrOfSeats[i].num === ele.num && arrOfSeats[i].row === ele.row) {
          arrOfSeats[i].isTaken = true;
        }
      });
    }
  }

  reserveSeat(eve: any, seat: any) {
    //isTaken==false&&isTakenByCurrentUser=false => red
    //isTaken==true&&isTakenByCurrentUser==false => alert
    //isTaken=true && isTakenByCurrentUser==true => gray

    if (seat.isTaken == false && seat.isTakenByCurrentUser == false) {
      seat.isTaken = true;
      seat.isTakenByCurrentUser = true;
      this.seatState.updateSeatColor(seat.row, seat.num, 'red');
      this.takenSeats.push(seat);
      this.totalPrice += 100;
      this.tickets = this.tickets + 1;
    } else if (seat.isTaken == true && seat.isTakenByCurrentUser == false) {
      alert('this seat is taken By Others');
    } else if (seat.isTaken == true && seat.isTakenByCurrentUser == true) {
      //cancel the seat for current user
      seat.isTakenByCurrentUser = false;
      seat.isTaken = false;
      this.seatState.updateSeatColor(seat.row, seat.num, 'gray');
      this.takenSeats = this.takenSeats.filter((s) => {
        if (s.num == seat.num && s.row == seat.row) {
        } else {
          return s;
        }
      });
      this.totalPrice -= 100;
      this.tickets = this.tickets - 1;
    }
  }

  receiveSeatToDelete(eve: any) {
    this.receivedSeatToDelete = eve.seat;
    this.takenSeats = this.takenSeats.filter(
      (seat) => seat != this.receivedSeatToDelete
    );
    this.seatState.updateSeatColor(
      this.receivedSeatToDelete.row,
      this.receivedSeatToDelete.num,
      'gray'
    );
    this.totalPrice -= 100;
  }
 

  sendDataToBackend() {
    this.objToSend = {
      cinema: this.choosenCinema,
      date: this.choosenDate,
      movie: this.movie.Title,
      time: this.choosenTime,
      reserve: this.takenSeats,
    };

    this.bookingService.addToCart(this.objToSend).subscribe((data) => {
      console.log('object is sent to backend');
    });
  }
}
