import { Injectable } from '@angular/core';
import { apiDetails } from '../models/apidetails';

@Injectable({
  providedIn: 'root'
})
export class ApidetailService {
  api!: apiDetails;

  apiSelected = false;
  constructor() { }
  setApiDetails(api: apiDetails) {
    this.api = api
    this.apiSelected = true;
  }
  getFlag() {
    return this.apiSelected
  }
  getApiDetails() {
    return this.api
  }
}
