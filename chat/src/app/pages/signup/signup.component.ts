import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Alert } from 'src/app/classes/alert';
import { AlertService } from '../../services/alert.service'
import { AlertType } from 'src/app/enums/alert-type.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) { 
    this.createForm();
  }

  ngOnInit() {
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
    if(this.signupForm.valid){
      const {email, password} = this.signupForm.value;
      console.log(`Email: ${email}, Password: ${password}`);
    }
    else{
      const failedLoginAlert = new Alert('Your email or password is not correct', AlertType.Danger);
      this.alertService.alerts.next(failedLoginAlert);
    }
  }
 
 

}