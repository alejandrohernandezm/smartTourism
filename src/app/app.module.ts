import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//module sdk auth0 
import { AuthModule } from '@auth0/auth0-angular'



//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTourismComponent } from './main-tourism/main-tourism.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { AboutComponent } from './share/about/about/about.component';
import { ContactComponent } from './share/contact/contact.component';
import { PremiunServiceComponent } from './share/premiun-service/premiun-service.component';
import { PriceComponent } from './share/price/price.component';
import { SideBarComponent } from './share/side-bar/side-bar.component';
import { FooterComponent } from './share/footer/footer.component';
import { MapComponent } from './share/map/map.component';
import { ProfileComponent } from './share/profile/profile.component';
import { HelpComponent } from './share/help/help.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './share/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTourismComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    PremiunServiceComponent,
    PriceComponent,
    SideBarComponent,
    FooterComponent,
    MapComponent,
    ProfileComponent,
    HelpComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    AuthModule.forRoot({
      domain: 'dev-6nlnv3j5.us.auth0.com',
      clientId: 'sf7GzzthXFWmXIWjt0XcIUEbX6mVjGm1',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
