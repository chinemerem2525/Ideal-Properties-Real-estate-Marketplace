import { Component, OnInit, OnDestroy, HostListener  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


   locations = [
    {
      name: 'Ikoyi',
      properties: 474,
      image: '../../../assets/img/neighbour/ikoyi.jpg'
    },
    {
      name: 'Banana Island',
      properties: 54,
      image: '../../../assets/img/neighbour/banana-island.png'
    },
    {
      name: 'Victoria Island',
      properties: 314,
      image: '../../../assets/img/neighbour/visctoria_island.jpg'
    },
    {
      name: 'Eko Atlantic',
      properties: 15,
      image: '../../../assets/img/neighbour/eco-atlantic.jpg'
    },
    {
      name: 'Oniru',
      properties: 85,
      image: '../../../assets/img/neighbour/2.jpg'
    },
    {
      name: 'Lekki',
      properties: 819,
      image: '../../../assets/img/neighbour/lekki.jpeg'
    },
    {
      name: 'Ikate',
      properties: 160,
      image: '../../../assets/img/neighbour/ikate.jpeg'
    },
    {
      name: 'Osapa',
      properties: 63,
      image: '../../../assets/img/neighbour/osapa.jpg'
    },
    {
      name: 'Chevron',
      properties: 14,
      image: '../../../assets/img/neighbour/chevron.jpg'
    }
  ];


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
