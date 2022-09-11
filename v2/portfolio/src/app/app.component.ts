import { Component, OnDestroy } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  isMobile: boolean;
  isCurrent: boolean = false;
  showTabs: boolean = false;
  isFullNav: boolean = false;
  resizeSub: Subscription;
  isLargeScreen: boolean = false;
  pages = [
    {
      title: 'home',
      url: 'home',
      icon: {
        name: 'home-outline',
        src: null,
      },
      className: 'home',
    },
    {
      title: 'projects',
      url: 'projects',
      icon: {
        name: 'apps-outline',
        src: null,
      },
      className: 'projects',
    },
    {
      title: 'contact',
      url: 'contact',
      icon: {
        name: 'call-outline',
        src: null,
      },
      className: 'contact',
    },
  ];
  screenSizes = {
    sm: 574,
    md: 768,
    lg: 1124,
    xl: 1300,
  };

  constructor(private platform: Platform, private menuCtrl: MenuController) {
    this.isMobile = platform.is('mobile');
    let screenWidth = platform.width();
    this.showTabs = screenWidth < this.screenSizes.sm;
    this.isLargeScreen = screenWidth > this.screenSizes.xl;
    this.isFullNav = this.isLargeScreen;
    this.resizeSub = platform.resize.subscribe(() => {
      screenWidth = platform.width();
      this.showTabs = screenWidth < this.screenSizes.sm;
      this.isLargeScreen = screenWidth > this.screenSizes.xl;
      this.isFullNav = this.isLargeScreen;
    });
  }
  async ionViewDidEnter() {
    await this.menuCtrl.enable(true, 'main-menu');
    await this.menuCtrl.open('main-menu');
  }
  addAnimationClass() {
    this.isCurrent = true;
  }
  hideFullNav() {
    if (this.isLargeScreen) return;
    this.isFullNav = false;
  }
  showFullNav() {
    if (this.isLargeScreen) return;
    this.isFullNav = true;
  }
  toggleFullNav() {
    this.isFullNav = !this.isFullNav;
  }
  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}
