import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_TwKvnhtCqQiNo7gWgws1agFh1Zzn3p4",
    authDomain: "hellofirebase-d6c27.firebaseapp.com",
    databaseURL: "https://hellofirebase-d6c27.firebaseio.com",
    projectId: "hellofirebase-d6c27",
    storageBucket: "hellofirebase-d6c27.appspot.com",
    messagingSenderId: "268796250654"
  };


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
