import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
        apiKey: "AIzaSyCwnMwzzHAOPSzeUlVtXjuvmsS5et_CggQ",
        authDomain: "testangular-294d9.firebaseapp.com",
        databaseURL: "https://testangular-294d9.firebaseio.com",
        projectId: "testangular-294d9",
        storageBucket: "testangular-294d9.appspot.com",
        messagingSenderId: "1013815327402",
        appId: "1:1013815327402:web:be29a2731b5af87ec46ed3"
    };
    firebase.initializeApp(config);
  }
}
