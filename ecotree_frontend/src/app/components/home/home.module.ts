import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StartComponent } from './components/start/start.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ServicesComponent } from './components/services/services.component';
import { ExpertsComponent } from './components/experts/experts.component';
import { TesimonialsComponent } from './components/tesimonials/tesimonials.component';
import { ClientsComponent } from './components/clients/clients.component';


@NgModule({
    declarations: [
        HomeComponent,
        StartComponent,
        AboutUsComponent,
        ServicesComponent,
        ExpertsComponent,
        TesimonialsComponent,
        ClientsComponent,
    ],
    exports: [
        StartComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FontAwesomeModule
    ]
})
export class HomeModule { }
