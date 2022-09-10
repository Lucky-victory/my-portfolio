import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isMobile: boolean;
  isCurrent:boolean=false;
  constructor(private platform: Platform) {
    this.isMobile = platform.is('mobile');
  }

  addAnimationClass(){
this.isCurrent=true;
  }
}
