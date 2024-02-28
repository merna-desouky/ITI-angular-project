import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ToastModule, FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  email: string = '';
  emailChecked: boolean = false;
  showToast: boolean = false;

  isValidEmail(): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  isButtonDisabled(): boolean {
    return !(this.isValidEmail() && this.emailChecked);
  }

  constructor(private messageService: MessageService) {}
  showBottomRight() {
    this.messageService.add({
      key: 'bc',
      severity: 'custom',
      summary: 'I-Watch',
      detail: 'Thank you for your subscription',
      // icon: 'pi pi-check',
    });

    this.email = '';
    this.emailChecked = false;
  }
}
