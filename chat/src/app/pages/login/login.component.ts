import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Alert} from '../../classes/alert';
import {AlertService} from '../../services/alert.service';
import {AlertType} from '../../enums/alert-type.enum';
import {LoadingService} from '../../services/loading.service';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public loginForm: FormGroup;
private subscriptions: Subscription[]=[];
private returnUrl: string;
  constructor(
    private fb: FormBuilder,
     private alertService: AlertService,
     private loadingService:LoadingService,
     private auth: AuthService,
     private router: Router,
     private route: ActivatedRoute) {
  
  this.createForm();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
 

  public submit(): void {
    
    if (this.loginForm.valid) {
      this.loadingService.isLoading.next(true);
    const {email, password} = this.loginForm.value;

    this.subscriptions.push(
      this.auth.login(email, password).subscribe(success => {
        if (success) {
          this.router.navigateByUrl(this.returnUrl);
        }else{
          this.displayFailedLogin();
        }
        this.loadingService.isLoading.next(false);
      })
    );
  }else {
    this.loadingService.isLoading.next(false);
    this.displayFailedLogin();
  }  
 }

 private displayFailedLogin(): void {
  const failedLoginAlert = new Alert('Invalid email/password combination, try again.', AlertType.Danger);
  this.alertService.alerts.next(failedLoginAlert);
 }
 
 ngOnDestroy() {
  this.subscriptions.forEach(sub => sub.unsubscribe());
 }
 
}
