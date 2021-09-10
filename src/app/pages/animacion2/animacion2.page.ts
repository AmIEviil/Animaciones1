import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion2',
  templateUrl: './animacion2.page.html',
  styleUrls: ['./animacion2.page.scss'],
})
export class Animacion2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}

interface Food {
  value: string;
  viewValue: string;
}

