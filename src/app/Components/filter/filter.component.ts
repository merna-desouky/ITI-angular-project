import { Component, Output, ViewEncapsulation, Input, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [DropdownModule, FormsModule,],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class FilterComponent implements OnInit {
  Categories: any
  movies: any
  selectedCatg = "All"
  @Output() myEvent = new EventEmitter();
  ngOnInit(): void {

    this.Categories = [{ name: 'All' },
    { name: 'Drama' },
    { name: 'Action' },
    { name: 'Crime' },
    { name: 'Adventure' },
    { name: 'Horror' },
    { name: 'Biography' },
    { name: 'Animation' }]
    console.log(this.selectedCatg, "selected")


  }
  onChange(evt: any) {
    this.selectedCatg = evt.value;
    this.myEvent.emit(this.selectedCatg);

  }
}
