import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonicSlides, Platform } from '@ionic/angular';

import SwiperCore, {
  Autoplay,
  EffectCube,
  SwiperOptions,
  Navigation,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Autoplay, Navigation, EffectCube]);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements AfterViewInit {
  swiperConfig: SwiperOptions = {
    navigation: true,
    loop: true,
    effect: 'cube',
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
  };
  hasFocus: boolean = false;
  @ViewChild('contactSwiper') contactSwiper: SwiperComponent;
  screenSizes = {
    sm: 574,
    md: 768,
    lg: 1124,
  };

  testimonials = [
    {
      author: {
        name: 'Per Harald Borgen',
        profession: 'CEO of Scrimba',
        photo: '../../../assets/images/per-Edited.png',
      },
      content:
        "Victory is a very talented developer who generously shares his knowledge with others. He is a very valued member of our community, as he's both willing and capable to get other students unstuck when they are struggling. Any company or community that gets ahold of Victory should do its utmost to keep him.",
    },
    {
      author: {
        photo: '../../../assets/images/oladapo.jpg',
        name: 'Oladapo David Ifeoluwa ( MSC, SAS)',
        profession: 'Data-scientist, Lecturer.',
      },
      content:
        'Lucky is an exceptional developer with a very calm spirit. \n He did not only developed a professional website for us, but he also took the pain of training us how to use it with and without his supervision. \n He gave us a very quality service with a blend of cost-effective advice. \n Lucky is an asset with an unimaginable hardworking spirit. and I will recommend him over and over again to my networks.',
    },
  ];
  jobTypes = [
    {
      id: 'contract',
      title: 'contract',
    },
    {
      id: 'part-time',
      title: 'part time',
    },
    {
      id: 'full-time',
      title: 'full time',
    },
    {
      id: 'others',
      title: 'others',
    },
  ];
  constructor(private platform: Platform) {}

  get leftJobTypes() {
    return this.jobTypes.filter((jobType) => jobType.id !== 'contract');
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contactSwiper.swiperRef.autoplay.start();
    }, 1500);
  }
  onFocusIn(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.hasFocus = target.value.trim() === '';
  }
  onFocusOut(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.hasFocus = target.value.trim() === '';
  }
}
