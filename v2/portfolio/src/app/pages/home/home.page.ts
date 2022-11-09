import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonicSlides, Platform } from '@ionic/angular';

import SwiperCore, { Autoplay, EffectCube, SwiperOptions } from 'swiper';

import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, EffectCube, IonicSlides]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit, OnDestroy {
  screenSizes = {
    sm: 574,
    md: 768,
    lg: 1124,
  };

  swiperConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    effect: 'cube',
    noSwiping: true,
    noSwipingClass: 'swiper-content',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  @ViewChild('infoSwiper') infoSwiper: SwiperComponent;
  constructor(private platform: Platform) {}
  ngAfterViewInit(): void {
    console.log('view init');
    setTimeout(() => {
      this.infoSwiper.swiperRef.autoplay.start();
    }, 1500);
  }

  ngOnDestroy(): void {}
}
