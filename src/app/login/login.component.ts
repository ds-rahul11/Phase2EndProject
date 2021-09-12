import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  uname?:string;
  pwd?:string;
  constructor() { }
  check()
  {
    if(this.uname=="shree" && this.pwd=="1234")
    {
      this._router.navigate(["/products"],{relativeTo:this._activatedRoute})
    }
    else{
      alert("invalid credentials")
    }
  }
  ngOnInit(): void {
  }

}
