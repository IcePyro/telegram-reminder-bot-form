import { Component } from '@angular/core';

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
}
