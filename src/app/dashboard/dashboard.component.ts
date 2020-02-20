import { LoremPicsumService } from './../lorem-picsum.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  randomImage;
  constructor(private picsum:LoremPicsumService) { }

  ngOnInit(): void {
    this.picsum.getRandomImage().pipe(
      map((data)=> { 
        console.log('data', data);
        this.randomImage = data;
      })
    );
  }

}
