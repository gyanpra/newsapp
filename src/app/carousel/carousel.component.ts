import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService} from '../service/newsapiservice.service'


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private _services: NewsapiserviceService) { }

  carouselData: any;

  ngOnInit(): void {
    this._services.getCarousel().subscribe(data => {
      this.carouselData = data;
      console.log(this.carouselData);
    });
  }

}
