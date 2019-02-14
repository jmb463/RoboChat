import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Alert } from 'src/app/classes/alert';
import { AlertService } from '../../services/alert.service'
import { AlertType } from 'src/app/enums/alert-type.enum';
import { LoadingService } from 'src/app/services/loading.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private subscriptions: Subscription[] = [];
  private returnUrl: string;


  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private loadingService: LoadingService, 
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
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
          if(success){
            this.router.navigateByUrl(this.returnUrl);
          }
          this.loadingService.isLoading.next(false);
        })
      )
    }
    else {
      const failedLoginAlert = new Alert('Your email or password were inavalid, try again.', AlertType.Danger);
      //setTimeout(() => {
      this.loadingService.isLoading.next(false);
      this.alertService.alerts.next(failedLoginAlert);
      //},2000);
        
      
    }
  } 

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
 

}
