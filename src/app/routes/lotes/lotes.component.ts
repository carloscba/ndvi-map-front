import { Component, OnInit } from '@angular/core';

import { LotesService } from '../../services/lotes.service';

@Component({
  selector: 'app-lotes',
  templateUrl: './lotes.component.html',
  styleUrls: ['./lotes.component.css']
})
export class LotesComponent implements OnInit {

  constructor(private lotesService: LotesService,) { }

  ngOnInit() {
    this.lotesService.get('asd').subscribe(
      (response) => {
        console.log('lotes', response)
      },
      (error) => {

      },
      () => {

      }
    )    
  }

}
