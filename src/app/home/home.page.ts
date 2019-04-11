import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapOptions, Environment, LatLng, Marker } from '@ionic-native/google-maps/ngx'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { Geofence } from '@ionic-native/geofence/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  map: GoogleMap

  constructor(private platform: Platform, private geolocation: Geolocation, private geofence: Geofence) { 
    this.geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err + 11111)
    )
  }

  async ngOnInit() {
    await this.platform.ready()
    await this.loadMap()
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

    });
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAXw14j_awAkCyiZJ4QVYYx0anaYWmVbIE',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAXw14j_awAkCyiZJ4QVYYx0anaYWmVbIE',
    })



    this.getLocation()
  }

}
