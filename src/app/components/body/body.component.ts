import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  mostrar = true;
  opciones  :any = {
    opcion:'PARQUEOS EVENTUALES'

  };
  placas: string[] =['4333-ABN','7655-PER','1422-CVD'] ;
  hoy: any;
  constructor() {
    this.hoy = new Date().toLocaleString()
   }

  ngOnInit() {
  }

  
};
