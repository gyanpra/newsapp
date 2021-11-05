import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
import {ModalserviceService} from '../service/modalservice.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  modalService: any;

  constructor(private _services: NewsapiserviceService,private _modalService: ModalserviceService) { }
  trendingScience:any[] | undefined;

  ngOnInit(): void {
    this._services.science().subscribe((data) => {
      this.trendingScience = data.articles;
    });
  }

}
