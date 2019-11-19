import { Component, OnInit } from '@angular/core';

import * as registers from './registers.json'

@Component({
  selector: 'app-regx',
  templateUrl: './regx.component.html',
  styleUrls: ['./regx.component.scss']
})
export class RegxComponent implements OnInit {
  public registers: Array<{name: string, value: string}> = (registers)['default'];
  constructor() {
    console.log(registers);
  }

  ngOnInit() {
  }

}
