import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonicSlides, Platform ,AlertController} from '@ionic/angular';

import SwiperCore, {
  Autoplay,
  EffectCube,
  SwiperOptions,
  Navigation,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Autoplay, Navigation, EffectCube, IonicSlides]);
import emailjs from '@emailjs/browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements AfterViewInit {
  swiperConfig: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    },
    loop: true,
    effect: 'cube',
    grabCursor: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
  };
  hasFocus: boolean = false;
  message: string=''
  email: string=''
  fullname: string = ''
  selectedJobType: string = 'contract'
  isSending = false;
  contactForm: NgForm;
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
        photo: 'assets/images/per-Edited.png',
      },
      content:
        "Victory is a very talented developer who generously shares his knowledge with others. He is a very valued member of our community, as he's both willing and capable to get other students unstuck when they are struggling. Any company or community that gets ahold of Victory should do its utmost to keep him.",
    },
    {
      author: {
        photo: 'assets/images/oladapo.jpg',
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
  constructor(private platform: Platform,private alertCtrl:AlertController) {}


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contactSwiper.swiperRef.autoplay.start();
    }, 1500);
  }
  
  async sendEmail(fullname: string, email: string,message:string,job_type:string) {
    try {
     
      await emailjs.send('service_emo60na','template_au2exk7',{to_name:fullname,to_email:email,message,job_type},'56mvGaiMJshw26OGe')
      
      this.isSending = false;
      if (this.contactForm.submitted) {
     this. contactForm.resetForm({ job_type: 'contract' });
      this.showAlert()
    }
    } catch (err) {
      console.log({ err });
      this.isSending = false;
      this.showAlert('Couldn\'t send message, please try again')
    }
  }
  formSubmit(contactForm:NgForm) {
    this.contactForm=contactForm
    console.log({ contactForm });
    const { fullname, message, email, job_type } = contactForm.control.value;
    
    this.sendEmail(fullname,email,message,job_type)
    
    this.isSending=true
    
  
  }
  async showAlert(message='Message sent') {
    const customAlert = await this.alertCtrl.create({message,buttons:['OK']});
    customAlert.present();
  }
}
