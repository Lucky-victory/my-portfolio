import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonicSlides, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { slideInOutAnimation } from 'src/app/helpers/animations/slide-in-out';
import SwiperCore, { Autoplay, EffectCube, SwiperOptions } from 'swiper';

import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, EffectCube, IonicSlides]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [slideInOutAnimation],
})
export class HomePage implements OnDestroy, AfterViewInit {
  showTabs: boolean = false;
  screenSizes = {
    sm: 574,
    md: 768,
    lg: 1124,
  };
  resizeSub: Subscription;
  swiperConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    effect: 'cube',
    noSwiping: true,
    noSwipingClass: 'swiper-content',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  @ViewChild('infoSwiper') infoSwiper: SwiperComponent;
  constructor(private platform: Platform) {
    let screenWidth = platform.width();
    this.showTabs = screenWidth < this.screenSizes.sm;

    this.resizeSub = platform.resize.subscribe(() => {
      screenWidth = platform.width();
      this.showTabs = screenWidth < this.screenSizes.sm;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.infoSwiper.swiperRef.autoplay.start();
    }, 1000);
  }
  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}
