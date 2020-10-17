import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { ServicesComponent } from './public/services/services.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent},
  { path: 'contact', pathMatch: 'full', component: ContactComponent},
  { path: 'about', pathMatch: 'full', component: AboutComponent},
  { path: 'services', pathMatch: 'full', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
