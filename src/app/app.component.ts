import { Component } from '@angular/core';
import {NEVER} from "rxjs";

enum Repeat {
  Never,
  Daily,
  Weekday
}

type Data = {
  dateTime?: Date,
  repeat: Repeat,
  nthDay?: number,
  weekdays: {
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thursday: boolean,
    friday: boolean,
    saturday: boolean,
    sunday: boolean,
  },
  followups : number[],
  message: String,
  title: String,
}

let test_data : Data = {
  dateTime: new Date("04/20/4242"),
  followups: [1,2],
  message: "Service Message",
  nthDay: 0,
  repeat: Repeat.Never,
  title: "Nothing",
  weekdays: {
    friday: true,
    monday: false,
    saturday: false,
    sunday: true,
    thursday: false,
    tuesday: false,
    wednesday: false
  }

}

let data: Data = {
  message: "",
  repeat: Repeat.Never,
  nthDay: undefined,
  title: "",
  dateTime: undefined,
  followups: [],
  weekdays : {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  }
};

function send_form(){
  console.log("Sending Data");
  Telegram.WebApp.sendData(JSON.stringify(test_data));
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'New Reminder';
  send_form = send_form;
  data = data;
}
