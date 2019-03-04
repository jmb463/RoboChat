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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
public signupForm: FormGroup;
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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
   }

  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
 

  public submit(): void {
    
    if (this.signupForm.valid) {
    // TODO call the auth service
    const {firstName, lastName, email, password} = this.signupForm.value;
    this.subscriptions.push(
      this.auth.signup(firstName,lastName,email, password).subscribe(success => {
        if (success) {
          this.router.navigateByUrl(this.returnUrl);
        }
        this.loadingService.isLoading.next(false);
      })
    );
  }else {
    const failedLoginAlert = new Alert ('Your email or password were invalid, try again',AlertType.Danger);
    this.loadingService.isLoading.next(false);
    this.alertService.alerts.next(failedLoginAlert);
  }
 }
 
 
 

}
