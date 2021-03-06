import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Environment, LatLng, Marker, Circle } from '@ionic-native/google-maps/ngx'
import { Geolocation } from '@ionic-native/geolocation/ngx'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  map: GoogleMap
  warningPopupHidden: boolean = true
  latLng: LatLng
  circle: Circle
  
  constructor(private platform: Platform, private geolocation: Geolocation, public navCtrl: NavController) { 
  }

  async ngOnInit() {
    await this.platform.ready()
    await this.loadMap()
  }
  
  openDetailedWarning() {
        //TODO: Open detailed page
        this.navCtrl.navigateForward('detailed-warning');
   }

  showWarningPopup() {
        this.setCircle()
        this.warningPopupHidden = false
  }

  getLocation() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.latLng = new LatLng(data.coords.latitude, data.coords.longitude)

      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: this.latLng,
          zoom: 15
        }
      })

      this.map.addMarker({
        title: 'You are here',
        icon: 'red',
        animation: 'BOUNCE',
        position: {
          lat: data.coords.latitude,
          lng: data.coords.longitude
        }
      }).then((marker:Marker) => {
        marker.showInfoWindow()
      })
      

    });
  }

  setCircle() {
    this.map.addCircleSync({
    'center': {"lat" : this.latLng.lat, "lng" : this.latLng.lng},
    'radius': 300,
    'strokeColor' : '#696969',
    'strokeWidth': 5,
    'fillColor' : '#d86363'
    });
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAXw14j_awAkCyiZJ4QVYYx0anaYWmVbIE',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAXw14j_awAkCyiZJ4QVYYx0anaYWmVbIE',
    })



    this.getLocation()
  }


    closeWarningPopup() {
        this.warningPopupHidden = true
    }
}
