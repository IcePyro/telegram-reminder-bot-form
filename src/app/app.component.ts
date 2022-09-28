import { Component } from '@angular/core';

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
  followups : number[]
}

let data: Data = {
  dateTime: undefined,
  repeat: Repeat.Never,
  nthDay: undefined,
  followups: [],
  weekdays : {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
};

function send_form(){
  console.log("Sending Data");
  Telegram.WebApp.sendData("Sent Data");
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
