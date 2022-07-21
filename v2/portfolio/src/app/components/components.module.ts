import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
