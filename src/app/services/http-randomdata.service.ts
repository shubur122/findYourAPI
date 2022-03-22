import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpRandomdataService {

  constructor(private http: HttpClient) { }

  url: string = 'https://random-data-api.com/api/users/random_user'
  postsUrl: string = 'https://jsonplaceholder.typicode.com/users/1/posts'
  fetchRandomData() {
    return this.http.get(this.url)
  }
  fetchRandomPosts() {
    return this.http.get(this.postsUrl)
  }
}

