import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-animacion3',
  templateUrl: './animacion3.page.html',
  styleUrls: ['./animacion3.page.scss'],
})
export class Animacion3Page implements OnInit {

  constructor(private animationCtrl: AnimationController) { }
  animation:Animation;

  ngOnInit() {
    this.animation=this.animationCtrl.create()
      .addElement(document.querySelector('.square'))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
  play(){
    this.animation.play();
  }
  pause(){
    this.animation.pause();
  }
  stop(){
    this.animation.stop();
  }
}
