import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditarHoraPage } from '../pages/editar-hora/editar-hora';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {HoraService} from '../service/hora.service';

import {AdMobFree} from '@ionic-native/admob-free';

const config = {
    apiKey: "AIzaSyC_TwKvnhtCqQiNo7gWgws1agFh1Zzn3p4",
    authDomain: "hellofirebase-d6c27.firebaseapp.com",
    databaseURL: "https://hellofirebase-d6c27.firebaseio.com",
    projectId: "hellofirebase-d6c27",
    storageBucket: "hellofirebase-d6c27.appspot.com",
    messagingSenderId: "268796250654"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarHoraPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarHoraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HoraService,
    AdMobFree
  ]
})
export class AppModule {}
