import { Component, OnInit, Input } from '@angular/core';

import { Persona } from './../persona';

@Component({
  selector: 'app-person-row',
  templateUrl: './person-row.component.html',
  styleUrls: ['./person-row.component.scss']
})
export class PersonRowComponent implements OnInit {

  @Input() persona: Persona;

  constructor() { }

  ngOnInit(): void {
  }

}
