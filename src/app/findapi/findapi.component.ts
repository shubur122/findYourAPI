import { Component } from '@angular/core';
import { apiDetails } from '../models/apidetails';
import { ApidetailService } from '../services/apidetail.service'

@Component({
  selector: 'app-findapi',
  templateUrl: './findapi.component.html',
  styleUrls: ['./findapi.component.sass']
})
export class FindapiComponent {

  aboutApi: string = `An application programming interface (API) is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software. A document or standard that describes how to build or use such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation.`

  apis: apiDetails[] = [
    {
      name: 'Random Data API',
      route: 'randomdata',
      description: '',
      official: 'https://random-data-api.com/',
    },
    {
      name: 'REST Countries',
      route: 'restcountries',
      description: '',
      official: 'https://restcountries.com/',
    },
    {
      name: 'Open Weather API',
      route: 'openweather',
      description: '',
      official: 'https://openweathermap.org/api',
    },
    {
      name: 'Pokemon API',
      route: 'pokemon',
      description: '',
      official: 'https://pokeapi.co/',
    },
    {
      name: 'NASA Open API',
      route: 'nasa',
      description: '',
      official: 'https://api.nasa.gov/',
    },
    {
      name: 'SpaceX API',
      route: 'spacex',
      description: '',
      official: 'https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs',
    },

  ]

  constructor(private apiDetails: ApidetailService) { }

  sendApiDetails(api: apiDetails) {
    this.apiDetails.setApiDetails(api)
  }
}
