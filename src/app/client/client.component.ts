import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    ngAfterViewInit(): void {
  // Load script manually if needed
  const script = document.createElement('script');
  script.src = 'assets/js/main.js';
  document.body.appendChild(script);
}


}
