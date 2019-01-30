import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first Angular App!';

  onClickMe(value){
    alert(value);
  }

  clickMessage="";
  clicks=1;

  onClickMe2(event:any){
    let evtMsg= event ? 'Event target is ' + event.target.tagname : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
}
