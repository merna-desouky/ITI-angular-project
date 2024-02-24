import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class FilterComponent {
  Categories: any;

  selectedCatg: any;

  ngOnInit() {
    this.Categories = [
      { name: 'Comedy', code: 'NY' },
      { name: 'Horror', code: 'RM' },
      { name: 'Action', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
