import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgmPolygon } from '@agm/core';

@Component({
  selector: 'app-lote-form',
  templateUrl: './lote-form.component.html',
  styleUrls: ['./lote-form.component.css']
})
export class LoteFormComponent implements OnInit {
  @ViewChild(AgmPolygon) polygon: any;

  title: string = 'My first AGM project';
  lat: number = -31.464982360950497;
  lng: number = -64.4309949874878;

  paths = [ 
    { lat: -31.464982360950497, lng: -64.4309949874878 },
    { lat: -31.46282263845819, lng: -64.43112373352051 },
    { lat: -31.462895850205864, lng: -64.43653106689453 },
  ];

  constructor(
    //private polygon: AgmPolygon
  ) { }
  
  onUpdatePolygon($event){
    /*
    this.polygon.getPaths().then((x: any[]) => {
      x.forEach(y => {
        console.log('-');
        y.forEach(z => console.log(z.lat(), z.lng()));
      });
    });
    */    
    
    console.log('polygon', this.polygon)
    console.log('$event', $event);
  }
  
  ngOnInit() {
    
  }

}
