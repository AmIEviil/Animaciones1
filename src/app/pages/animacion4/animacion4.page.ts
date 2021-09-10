import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Animation } from '@ionic/core';


@Component({
  selector: 'app-animacion4',
  templateUrl: './animacion4.page.html',
  styleUrls: ['./animacion4.page.scss'],
})
export class Animacion4Page implements OnInit {

  constructor(private animateCtrl: AnimationController) { 
    const animacion: Animation = animateCtrl.create()
    .addElement(document.querySelector('capa'))
    .duration(1000)
    .fromTo('opacity',1,0);
    animacion.play;

  }

  ngOnInit() {
  }
  

}
