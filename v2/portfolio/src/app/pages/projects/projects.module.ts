import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsPageRoutingModule } from './projects-routing.module';
import { SwiperModule } from 'swiper/angular';

import { ProjectsPage } from './projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    ProjectsPageRoutingModule,
  ],
  declarations: [ProjectsPage],
})
export class ProjectsPageModule {}
