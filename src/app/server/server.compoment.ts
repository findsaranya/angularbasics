import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  //styleUrls: ['./server.component.css']
  styles : [`
    .online {
      color:#fff;
    }
  `]
})
export class ServerComponent{
 title :string = 'Server';
 serverId : number = 45678;
 serverStatus : string = '';
 constructor(){
   this.serverStatus = Math.random() > 0.5 ? "online" : 'offline';
 }
 getServerId = () => {
   return this.serverId;
 }
 getColor(){
   return this.serverStatus === "online" ? "green" : "red";
 }
}