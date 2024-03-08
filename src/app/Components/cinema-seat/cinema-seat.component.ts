import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { SeatStateService } from '../../Services/seat-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cinema-seat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cinema-seat.component.html',
  styleUrl: './cinema-seat.component.scss'
})
export class CinemaSeatComponent implements OnInit, OnChanges {
  @Input()seatNum:any;
  @Input()seat:any;
  constructor(public seatState: SeatStateService){
    console.log('seat constructor is called ');
  }
  ngOnChanges(): void {
    if(this.seat.isTaken){
      this.seatState.updateSeatColor(this.seat.row,this.seat.num,'rgb(67, 67, 67)')
      this.seat.isTakenByCurrentUser=false;
     }else{
      this.seat.isTakenByCurrentUser=false;
     }
  }
  
  ngOnInit(): void {
    console.log('seat oninit is called ');
    
   if(this.seat.isTaken){
    this.seatState.updateSeatColor(this.seat.row,this.seat.num,'rgb(67, 67, 67)')
    this.seat.isTakenByCurrentUser=false;
   }else{
    this.seat.isTakenByCurrentUser=false;
   }
  }

}
