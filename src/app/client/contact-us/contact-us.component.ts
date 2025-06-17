import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
 form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

    sendMessage() {
    console.log('Message sent:', this.form);
    alert('Thank you! Your message has been sent.');
    this.form = { name: '', email: '', subject: '', message: '' };
  }

}
