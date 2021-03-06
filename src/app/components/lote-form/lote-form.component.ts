import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lote-form',
  templateUrl: './lote-form.component.html',
  styleUrls: ['./lote-form.component.css']
})
export class LoteFormComponent implements OnInit {
  form;
  title: string = 'My first AGM project';
  lat: number = -31.464982360950497;
  lng: number = -64.4309949874878;

  pathChanged: EventEmitter<any> = new EventEmitter<any>();

  paths = [ 
    { lat: -31.464982360950497, lng: -64.4309949874878 },
    { lat: -31.46282263845819, lng: -64.43112373352051 },
    { lat: -31.462895850205864, lng: -64.43653106689453 },
  ];

  constructor() {}

  onPathChanged($event){
    console.log('$event', $event.then((e)=>{
      
      e.map((item, index) => {
        console.log(item.lat(), item.lng());
      })

    }));
  }

  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl('', Validators.compose([
        Validators.required,
      ])),
      description : new FormControl('', Validators.compose([
        Validators.required
      ])),
    });   
    
  } 

}
