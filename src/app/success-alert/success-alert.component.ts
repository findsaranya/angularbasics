import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-success-alert',
  selector:'.alert-comp',
  //templateUrl: './success-alert.component.html',
  template:`
   <div class="alert alert-success" role="alert">
  A simple warning alert—check it out!
</div>
  `,
  //styleUrls: ['./success-alert.component.css']
  styles:[
    `
    .alert-success{
      color:purple!important;
    }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
