import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRandomdataService } from 'src/app/services/http-randomdata.service';

@Component({
  selector: 'app-randomdata',
  templateUrl: './randomdata.component.html',
  styleUrls: ['./randomdata.component.sass']
})
export class RandomdataComponent implements OnInit {

  constructor(private RandomData: HttpRandomdataService) {

  }
  defaultPic: string = 'https://img.redro.pl/fototapety/default-profile-picture-avatar-photo-placeholder-vector-illustration-400-205664584.jpg'
  user: any;
  posts: any;
  ngOnInit(): void {
    this.RandomData.fetchRandomData().subscribe(res => {
      this.user = res
      console.log(res)
    })
    this.RandomData.fetchRandomPosts().subscribe(posts => this.posts = posts)
  }
}
