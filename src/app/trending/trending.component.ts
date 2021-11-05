import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService} from '../service/newsapiservice.service';
import {ModalserviceService} from '../service/modalservice.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  modalService: any;

  constructor(private _services: NewsapiserviceService,private _modalService: ModalserviceService) { }

  trendingDisplay:any[] | undefined;


  ngOnInit(): void {

    this._services.trending().subscribe(
      data => {
        console.log(data);
        this.trendingDisplay = data['articles'];
      }
    )
  }
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}


}
