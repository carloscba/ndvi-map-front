import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lote-list',
  templateUrl: './lote-list.component.html',
  styleUrls: ['./lote-list.component.css']
})
export class LoteListComponent implements OnInit {

  @Input() loteData;

  constructor() { }

  ngOnInit() {
  }

}
