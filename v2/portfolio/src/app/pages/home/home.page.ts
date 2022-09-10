import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from 'src/app/helpers/animations/slide-in-out';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [slideInOutAnimation],
})
export class HomePage implements OnInit {
  isCurrent: boolean = false;
  constructor() {}
  ionViewDidEnter() {
    this.isCurrent = true;
  }
  ngOnInit() {}
}
