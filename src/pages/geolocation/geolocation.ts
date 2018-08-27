import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  latitude: number;
  longitude: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(position =>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log('this.latitude',this.latitude);
      console.log('this.longitude',this.longitude);
  },error=>{
      console.log('error',error);
  });
  }

  navigateLocation(){
    let options: LaunchNavigatorOptions = {
     app: this.launchNavigator.APP.GOOGLE_MAPS,
              start:[this.latitude,this.longitude]
       };
   this.launchNavigator.navigate('London, ON',options)
   .then(success =>{
     console.log(success);
   },error=>{
     console.log(error);
   })
 }

}
