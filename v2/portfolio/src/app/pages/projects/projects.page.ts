import { Component, OnInit, OnDestroy } from '@angular/core';
import { Animation, Platform, IonicSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import SwiperCore, { Keyboard, Pagination, Navigation, Zoom } from 'swiper';

SwiperCore.use([Keyboard, Navigation, Pagination, Zoom]);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit, OnDestroy {
  
  slidesPerView: number = 1;
  projects = [
    {
      title: 'Photo App',
      image: 'assets/images/screely-1667778440373.png',
      desc:"Phozy is photo-sharing platform, where you can share, like, collect or download photos for free",
      tools: [
        {
          name: 'Typescript',
          icon: 'assets/icon/icons8-typescript-48.png',
        },
        {
          name: 'Ionic',
          icon: 'assets/icon/icons8-ionic-48.png',
        },
        {
          name: 'Angular',
          icon: 'assets/icon/icons8-angular-icon.png',
        },
        {
          name: 'HarperDB',
          icon: 'assets/images/harperdb-icon.png',
        },
      ],
      gitUrl: 'https://github.com/Lucky-victory/phozy',
      liveUrl: 'https://phozy.up.railway.app/',
    },
    

    {
      title: 'Audio player',
      desc:"An audio player with playlist",
      tools: [
        {
          name: 'Typescript',
          icon: 'assets/icon/icons8-typescript-48.png',
        },
        
        {
          name: 'Angular',
          icon: 'assets/icon/icons8-angular-icon.png',
        },
      ],
      image: 'assets/images/screely-1670324874971.png',
      gitUrl: 'https://github.com/Lucky-victory/angular-music-player',
      liveUrl: 'https://ng-audio-player.vercel.app',
    },
  ];
  screenSizes = {
    sm: 574,
    md: 964,
    lg: 1124,
  };

  resizeSub: Subscription;
  constructor(private platform: Platform) {
    let screenWidth = platform.width();

    this.resizeSub = platform.resize.subscribe(() => {
      screenWidth = platform.width();

      if (screenWidth < this.screenSizes.md) this.slidesPerView = 1;
      if (screenWidth > this.screenSizes.md) this.slidesPerView = 2;
      if (screenWidth > this.screenSizes.lg) this.slidesPerView = 3;
    });
    if (screenWidth > this.screenSizes.md) this.slidesPerView = 2;
    if (screenWidth > this.screenSizes.lg) this.slidesPerView = 3;
  }
  ionViewDidEnter() {}
  ngOnInit() {}
  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}
