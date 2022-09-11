import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage
 implements OnInit, OnDestroy {
  showTabs: boolean = false;
  screenSizes = {
    sm: 574,
    md: 768,
    lg: 1124,
  };
  resizeSub: Subscription;
  constructor(private platform: Platform) {
    let screenWidth = platform.width();
    this.showTabs = screenWidth < this.screenSizes.sm;

    this.resizeSub = platform.resize.subscribe(() => {
      screenWidth = platform.width();
      this.showTabs = screenWidth < this.screenSizes.sm;
    });
  }
  ngOnInit() {}

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}