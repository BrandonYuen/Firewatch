import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-input-confirmation',
  templateUrl: './user-input-confirmation.page.html',
  styleUrls: ['./user-input-confirmation.page.scss'],
})
export class UserInputConfirmationPage implements OnInit {

    constructor(public navCtrl: NavController) {
    }

  ngOnInit() {
  }

  ok() {
	this.navCtrl.navigateBack('home');
  }

}
