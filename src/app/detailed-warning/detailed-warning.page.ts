import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detailed-warning',
  templateUrl: './detailed-warning.page.html',
  styleUrls: ['./detailed-warning.page.scss'],
})
export class DetailedWarningPage implements OnInit {

  constructor(public navCtrl: NavController) {
  }

  openUserInputPage() {
    this.navCtrl.navigateForward('user-input');
  }

  ngOnInit() {
  }

}
