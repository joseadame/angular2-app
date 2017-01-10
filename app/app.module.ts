import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService} from './hero.service';
import { RouterModule } from '@angular/router'
import {DashBoardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule, 
  	AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent,
  	HeroesComponent,
  	DashBoardComponent
  ],
  providers: [
  	HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
