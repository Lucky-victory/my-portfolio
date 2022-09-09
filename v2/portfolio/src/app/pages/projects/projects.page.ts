import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  animation: Animation;
  @ViewChild('content') ionContent: ElementRef<HTMLDivElement>;
  constructor(private animationCtrl: AnimationController) {}
  ionViewWillEnter() {
    console.log(this.ionContent);

    this.animation = this.animationCtrl.create();
    this.animation.addElement(this.ionContent.nativeElement).keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
      { offset: 1, transform: 'scale(1) rotate(45deg)' },
    ]);
  }
  ngOnInit() {}
}
