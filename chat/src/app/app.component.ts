import { Component, OnInit } from '@angular/core';
import { Alert } from '../app/classes/alert';
import { AlertService } from './services/alert.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  
  public alerts: Array<Alert> = [];
 
  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alerts.subscribe(alert => {
      this.alerts.push(alert);
    })
  }
}
 