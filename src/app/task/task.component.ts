import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   show:boolean = true;
   logall : any[]=[];
   count :number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  onHandleClick = () => {
    this.show = !this.show;
  }
  onLogAll(){
    this.count +=1;
    this.show = !this.show;
    //this.logall.push(this.count);
    this.logall.push(new Date());
  }
  getbgColor=()  => {
    return this.count >=5 ? 'blue':'initial';
  }
}
