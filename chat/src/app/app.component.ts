import { Component, OnInit } from '@angular/core';
import { Alert } from '../app/classes/alert';
import { AlertService } from './services/alert.service'
import {Subscription} from 'rxjs';
import {LoadingService} from './services/loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private subscriptions:Subscription[]=[];
  public loading : boolean=false;
  public alerts: Array<Alert> = [];
 
  constructor(private alertService: AlertService, private loadingService: LoadingService) {}

  ngOnInit () {
    this.subscriptions.push(
      this.loadingService.isLoading.subscribe(isLoading =>{
        this.loading=isLoading;
      })
    )
    
    this.subscriptions.push(
      this.alertService.alerts.subscribe(alert => {
          this.alerts.push(alert);
      })
    )
    
  }


}