import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'contact',
    title: 'Lucky Victory | Contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'projects',
    title: 'Lucky Victory | Projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then(
        (m) => m.ProjectsPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '**',
    redirectTo: 'about',
  },  {
    path: 'testimonials',
    loadChildren: () => import('./pages/testimonials/testimonials.module').then( m => m.TestimonialsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
