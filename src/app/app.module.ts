import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'ourwork', component: OurworkComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: '**', component: InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    OurworkComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
