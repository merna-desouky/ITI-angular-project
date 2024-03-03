import { Component, Input, Output, input } from '@angular/core';
import { SeatStateService } from '../../Services/seat-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cinema-seat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cinema-seat.component.html',
  styleUrl: './cinema-seat.component.scss'
})
export class CinemaSeatComponent {
  @Input()seatNum:any;
  @Input()seat:any;
  constructor(public seatState: SeatStateService){}
 
}
