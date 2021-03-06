import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';
import { MainService } from '../main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) { }

  user: User = new User();

  cia: boolean = false;
  kanji: boolean = false;
  react: boolean = false;
  wiki: boolean = false;

  // POST
  name: string;
  email: string;

  cia2: boolean = false;
  kanji2: boolean = false;
  react2: boolean = false;
  wiki2: boolean = false;

  // PUT
  email2: string;

  // DELETE
  email3: string;

  subscribe = () => {
    this.user = new User();
    this.user.fullname = this.name;
    this.user.email = this.email;
    this.user.subscriptions = '';
    if (this.cia)
      this.user.subscriptions += 'C';
    if (this.kanji)
      this.user.subscriptions += 'K';
    if (this.react)
      this.user.subscriptions += 'R';
    if (this.wiki)
      this.user.subscriptions += 'W';

      console.log(this.user.subscriptions);

    // POST request
    this.mainService.saveUser(this.user)
    .subscribe(res => console.log(res));
  };

  modifySub = () => {
    this.user = new User();
    this.user.fullname = '';
    this.user.email = this.email2;
    this.user.subscriptions = '';
    if (this.cia2)
      this.user.subscriptions += 'C';
    if (this.kanji2)
      this.user.subscriptions += 'K';
    if (this.react2)
      this.user.subscriptions += 'R';
    if (this.wiki2)
      this.user.subscriptions += 'W';

    // PUT request
    this.mainService.editUser(this.user)
    .subscribe(res => console.log(res));
  };

  deleteSub = () => {
    // DELETE request
    this.mainService.deleteUser(this.email3).subscribe();
  };

  ngOnInit() {
  }

}
