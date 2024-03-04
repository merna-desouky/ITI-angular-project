import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input()takenSeats:any;
  @Output() dataEvent = new EventEmitter<{}>();
  
  deleteSeat(eve:any,seat:any){
    const dataToSend = {seat:seat,target:eve};
    this.dataEvent.emit(dataToSend);
  }
}
