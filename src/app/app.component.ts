import {Component} from '@angular/core';

enum Repeat {
  Never,
  Daily,
  Weekday
}

type Data = {
  date_time?: Date,
  repeat: String,
  nth_day?: number,
  weekdays: {
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thursday: boolean,
    friday: boolean,
    saturday: boolean,
    sunday: boolean,
  },
  followups: number[],
  message: String,
  title: String,
}




let test_data: Data = {
  date_time: new Date("04/20/4242"),
  followups: [1, 2],
  message: "Service Message",
  nth_day: 3,
  repeat: "Never",
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
  repeat: "Never",
  nth_day: undefined,
  title: "",
  date_time: undefined,
  followups: [],
  weekdays: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  }
};

function send_form() {
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
  data = test_data;
}
