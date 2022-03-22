import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FindapiComponent } from './findapi/findapi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExampleIntroComponent } from './examples/example-intro/example-intro.component';
import { RandomdataComponent } from './examples/randomdata/randomdata.component';
import { RestcountriesComponent } from './examples/restcountries/restcountries.component';
import { OpenweatherComponent } from './examples/openweather/openwheater.component';
import { PokemonComponent } from './examples/pokemon/pokemon.component';
import { NasaComponent } from './examples/nasa/nasa.component';
import { SpacexComponent } from './examples/spacex/spacex.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotfoundComponent,
    FindapiComponent,
    NavbarComponent,
    ExampleIntroComponent,
    RandomdataComponent,
    RestcountriesComponent,
    OpenweatherComponent,
    PokemonComponent,
    NasaComponent,
    SpacexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
