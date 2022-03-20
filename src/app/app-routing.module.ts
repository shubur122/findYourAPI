import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaComponent } from './examples/nasa/nasa.component';
import { OpenweatherComponent } from './examples/openweather/openwheater.component';
import { PokemonComponent } from './examples/pokemon/pokemon.component';
import { RandomdataComponent } from './examples/randomdata/randomdata.component';
import { RestcountriesComponent } from './examples/restcountries/restcountries.component';
import { SpacexComponent } from './examples/spacex/spacex.component';
import { FindapiComponent } from './findapi/findapi.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'findapi', component: FindapiComponent },
  { path: 'findapi/randomdata', component: RandomdataComponent, },
  { path: 'findapi/openweather', component: OpenweatherComponent },
  { path: 'findapi/restcountries', component: RestcountriesComponent },
  { path: 'findapi/nasa', component: NasaComponent },
  { path: 'findapi/pokemon', component: PokemonComponent },
  { path: 'findapi/spacex', component: SpacexComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
