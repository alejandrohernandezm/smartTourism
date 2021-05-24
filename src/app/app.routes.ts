import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './share/about/about/about.component';
import { ContactComponent } from './share/contact/contact.component';
import { PremiunServiceComponent } from './share/premiun-service/premiun-service.component';
import { MapComponent } from './share/map/map.component';
import { PriceComponent } from './share/price/price.component';
import { ProfileComponent } from './share/profile/profile.component';
import { HelpComponent } from './share/help/help.component';
import { ListaComponent } from './share/lista/lista.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'price', component: PriceComponent },
    { path: 'help', component: HelpComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'list', component: ListaComponent },
    { path: 'premiun', component: PremiunServiceComponent, canActivate: [AuthGuard] },
    { path: 'map',component: MapComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);