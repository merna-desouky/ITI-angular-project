import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatStateService {
  private seatColorSubject = new BehaviorSubject<{ [key: string]: string }>({});
  seatColor$ = this.seatColorSubject.asObservable();

  constructor() { }
  updateSeatColor(row: number, seatNum: string, color: string) {
    const currentColors = { ...this.seatColorSubject.value };
    const key: string = `${row}-${seatNum}`; // Specify key as string type
    currentColors[key] = color;
    this.seatColorSubject.next(currentColors);
  }
  
  getSeatColor(row: number, seatNum: string,seat:any): string {
    const currentColors = { ...this.seatColorSubject.value };
    const key: string = `${row}-${seatNum}`; // Specify key as string type
    return currentColors[key] || 'grey'; // Return grey if color not set
  }
}
