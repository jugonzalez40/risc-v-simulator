import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  // 0000000 rs2 rs1 000 rd 0110011 1
  ins = [
    ['0000000','$s0','$t1','000','$s0','0110011'],
    ['5', '$t1', '000', '$s2', '0010011'],
    ['LOAD', '$s3', '$t4', '000', '0000', '1100011'],
    ['EXIT', '$s7', '1101111']
  ]

//   ADD $s0, $s1, $t1
// ADDI $s2,$t1, 5
// BEQ $s3,$t4,LOAD
// JAL rd,imm

  binaryRows = [];

  constructor() { }

  ngOnInit() {

  }


  public play(){
    const interval = setInterval(() => {
      if(!this.ins.length) { clearInterval(interval); }
      this.binaryRows = [ ...this.binaryRows, this.ins[0]]
      this.ins = this.ins.slice(1);
    } ,2000);
  }

  public stop(){

  }

}
