import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiDetails } from 'src/app/models/apidetails';
import { ApidetailService } from 'src/app/services/apidetail.service';


@Component({
  selector: 'app-example-intro',
  templateUrl: './example-intro.component.html',
  styleUrls: ['./example-intro.component.sass']
})
export class ExampleIntroComponent implements OnInit {
  api: apiDetails = {
    name: '',
    route: '',
    description: '',
    official: ''
  }
  apiSelected: boolean = false;
  constructor(private apiDetails: ApidetailService, private router: Router) { }

  ngOnInit(): void {
    this.apiSelected = this.apiDetails.getFlag()
    if (!this.apiSelected) this.router.navigate(['/findapi'])
    this.api = this.apiDetails.getApiDetails()
  }

}
