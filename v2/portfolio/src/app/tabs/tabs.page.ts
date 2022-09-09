import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
isMobile:boolean
  constructor(private platform:Platform) {
    this.isMobile=platform.is('mobile');
  }

}
