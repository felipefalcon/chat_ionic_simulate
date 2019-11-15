import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../app/user.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categoria: String = "";
  username;
  //método
  onItemClick (){
    this.navCtrl.push("ChatPage", {
      params: [this.username, this.categoria]
    });
  }

  categorySelected(categoria){
    this.categoria = categoria;
  }

  changeUsername(username){
    this.username = username;
  }

  constructor(public navCtrl: NavController, private userService: UserService) {
    this.username = this.userService.username;  
  }

}
