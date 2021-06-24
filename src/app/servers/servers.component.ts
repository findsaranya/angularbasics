import { Component, OnInit } from '@angular/core';

@Component({
  // selector:'app-servers' 
  //selector: '[app-servers]',//attribute selector
  selector:'.app-servers',//class selector
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   addServer : boolean = true;
   serverCreationStatus :string = "No servers created";
   serverName : string = 'sserver 567';
   userName : string='';
   userVisible :boolean = false;
   servers:string[] = ["server1","server2","server3"];
  constructor() {

    //setTimeout(() => this.addServer= false,4000);
   }

  
  ngOnInit(): void {
  }

   onCreateServers = () => {
      console.log("button clicked");
     this.serverCreationStatus = "Server created!!" + this.serverName;
     this.servers.push(this.serverName);
       this.userVisible = true;
     this.addServer = false;

   }
   onHandleChange = (event : Event) :void=> {
    //  console.log("on change event",event)
    this.serverName = (<HTMLInputElement>event.target).value;
   }
   onUserChange = () => {
     this.userName = '';
   
   }


}
