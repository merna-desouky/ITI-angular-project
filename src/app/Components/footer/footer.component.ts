import { Component, ViewEncapsulation } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  showToast: boolean = false;

  constructor(private messageService: MessageService) {}
  showBottomRight() {
    this.messageService.add({
      key: 'bc',
      severity: 'custom',
      summary: 'I-Watch',
      detail: 'Thank you for your subscription',
      // icon: 'pi pi-check',
    });
  }
}
