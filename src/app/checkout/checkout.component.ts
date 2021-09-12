import { Component, OnInit } from '@angular/core';
import { globalvariables } from '../global-variables';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  grandTotal:number=0;
  constructor() { 
    this.grandTotal=globalvariables.grandTotal;
  } 

  ngOnInit(): void {
  }

}
