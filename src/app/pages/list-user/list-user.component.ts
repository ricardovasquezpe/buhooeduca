import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.users = [
      {name: "Ricardo", email: "ricardo@", date:"fff"},
      {name: "Ricardo1", email: "ricardo@1", date:"fff1"},
      {name: "Ricardo2", email: "ricardo@2", date:"fff2"}
    ];
  }

  deleteUser(user: User): void{
    this.users = this.users.filter(u => u !== user);
  }

  editUser(): void{
    
  }

  addUser(): void {
    //this.router.navigate(['add']);
    this.users.push({name: "Ricardo4", email: "ricardo4@", date:"fff4"});
  };

}
