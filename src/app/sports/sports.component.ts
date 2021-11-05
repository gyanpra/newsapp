import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService} from '../service/newsapiservice.service';
import {ModalserviceService} from '../service/modalservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _services: NewsapiserviceService,private _modalService: ModalserviceService) { }

  sportsDisplay:any[] | undefined;

  ngOnInit(): void {
    this._services.sports().subscribe(data => {
      this.sportsDisplay = data.articles;
    }
    );
  }

}
