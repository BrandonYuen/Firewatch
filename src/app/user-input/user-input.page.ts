import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.page.html',
  styleUrls: ['./user-input.page.scss'],
})
export class UserInputPage implements OnInit {
  currentImage: any
  sendBtnHidden: boolean = true
  imageCardHidden: boolean = true

  constructor(public navCtrl: NavController, private camera: Camera) {
  }

  ngOnInit() {
  }

  takePicture() {
	const options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}

	this.camera.getPicture(options).then((imageData) => {
	  this.currentImage = 'data:image/jpeg;base64,' + imageData
	  this.sendBtnHidden = false
	  this.imageCardHidden = false
	}, (err) => {
	 // Handle error
	 console.log("Camera issue:" + err)
	});
  }

  cancel() {
	this.navCtrl.navigateBack('detailed-warning');
  }

  send() {
	this.navCtrl.navigateForward('user-input-confirmation');
	//TODO: Show confirmation message when back
  }
}
