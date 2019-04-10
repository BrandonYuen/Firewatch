import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
    warningPopupHidden: boolean = true

    constructor(public navCtrl: NavController) {
    }

    openDetailedWarning() {
        //TODO: Open detailed page
        this.navCtrl.navigateForward('detailed-warning');
    }

    showWarningPopup() {
        this.warningPopupHidden = false
    }

    closeWarningPopup() {
        this.warningPopupHidden = true
    }
}
