import { Component, Input, OnInit } from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {interpolateParams} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss']
})
export class postesComponent implements OnInit {

  @Input() tittrePoste: string;
  @Input() contentPost: string;
  @Input() ratioPoste: number;
  @Input() datePoste: string;

  constructor() { }

  ngOnInit() {
  }

  getRatio() {
    return this.ratioPoste;
  }
  /* gestion couleur du ratio
  getcolorp(){
    if (this.ratioPoste > 0 ) {
      return 'green';
    } else if (this.ratioPoste === 0 ) {
      return 'silver';
    } else if (this.ratioPoste < 1 ) {
      return 'red';
    }
  }*/
  jaime(){
    return this.ratioPoste += 1;
  }
  jaimePas(){
    return this.ratioPoste -= 1;
  }
}
