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
        this.warningPopupHidden = false
  }

  getLocation() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      let latLng = new LatLng(data.coords.latitude, data.coords.longitude)

      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: latLng,
          zoom: 15
        }
      })

      this.map.addMarker({
        title: 'you are here',
        icon: 'red',
        animation: 'BOUNCE',
        position: {
          lat: data.coords.latitude,
          lng: data.coords.longitude
        }
      }).then((marker:Marker) => {
        marker.showInfoWindow()
      })

      let circle: Circle = this.map.addCircleSync({
        'center': {"lat" : data.coords.latitude, "lng" : data.coords.longitude},
        'radius': 300,
        'strokeColor' : '#AA00FF',
        'strokeWidth': 5,
        'fillColor' : '#880000'
      });

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
