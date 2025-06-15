import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setupTabs();
  }

  setupTabs(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
    const contents = document.querySelectorAll<HTMLElement>('.tab-content');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        contents.forEach((c) => c.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.dataset.tab;
        const targetContent = document.getElementById(targetId!);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  callAgent(): void {
    window.location.href = 'tel:08147300000';
  }

  chatWhatsApp(): void {
    window.open('https://wa.me/2348030000000', '_blank');
  }

  requestCallback(): void {
    alert('A callback request has been submitted.');
  }

}
