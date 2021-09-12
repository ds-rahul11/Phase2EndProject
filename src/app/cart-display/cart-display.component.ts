import { Component, OnInit } from '@angular/core';
import { globalvariables } from '../global-variables';
@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {
  [x: string]: any;
  local_list: Array<any>;
  localsum:number=0;
  localcount:number=0;
  localselected:Array<any>=new Array();
  constructor() {
    this.localcount=globalvariables.totalCount;
    this.localsum = globalvariables.grandTotal;
    this.local_list=globalvariables.item_list;
    for(let i=0;i<globalvariables.selected.length;i++){
      this.localselected[i]= globalvariables.item_list[globalvariables.selected[i]-1];
    }
   }
  ngOnInit(): void {
  
  }

}
