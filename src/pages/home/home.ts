import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      try {
        if (data && data.email && data.uid) {
          this.toast.create({
            message: 'Welcome to APP_NAME '+ data.email,
            duration: 10000
          }).present();
            
        } else {
          this.toast.create({
            message: 'Error al hacer login',
            duration: 10000
          }).present();
          //alert('Debe estar logueado para acceder MDFK');
          //this.navCtrl.push(LoginPage);
            
        }
      } catch (error) {
        alert("Error en logeo " + error);
        console.error("Error en logeo " + error);
      }

  });

  }

}
