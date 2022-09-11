import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import {
  AnimationController,
  Animation,
  Platform,
  IonicSlides,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit, OnDestroy {
  animation: Animation;
  slidesPerView: number = 1;
  showTabs: boolean = false;
  screenSizes = {
    sm: 574,
    md: 768,
    lg: 1124,
  };
  @ViewChild('content') ionContent: ElementRef<HTMLDivElement>;
  resizeSub: Subscription;
  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform
  ) {
    let screenWidth = platform.width();
    this.showTabs = screenWidth < this.screenSizes.sm;

    this.resizeSub = platform.resize.subscribe(() => {
      screenWidth = platform.width();
      this.showTabs = screenWidth < this.screenSizes.sm;
      if (screenWidth < this.screenSizes.md) this.slidesPerView = 1;
      if (screenWidth > this.screenSizes.md) this.slidesPerView = 2;
      if (screenWidth > this.screenSizes.lg) this.slidesPerView = 3;
    });
    if (screenWidth > this.screenSizes.md) this.slidesPerView = 2;
    if (screenWidth > this.screenSizes.lg) this.slidesPerView = 3;
  }
  ionViewDidEnter() {
    this.animation = this.animationCtrl.create();
    // this.animation.addElement(this.ionContent.nativeElement).keyframes([
    //   { offset: 0, transform: 'scale(1) rotate(0)' },
    //   { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    //   { offset: 1, transform: 'scale(1) rotate(45deg)' },
    // ]);
  }
  ngOnInit() {}
  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}
