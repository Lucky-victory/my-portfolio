import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicSlides, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { slideInOutAnimation } from 'src/app/helpers/animations/slide-in-out';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay, IonicSlides]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [slideInOutAnimation],
})
export class HomePage implements OnInit, OnDestroy {
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
