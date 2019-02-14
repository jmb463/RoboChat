import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { Observable , of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<User | null>;
  

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { 
    this.currentUser = of(null);
  }

  public signup(firstName: string, lastName: string, email: string, password:string){
    return of(true);
  }

  public login(email:string, password:string){
    return of(true);
  }

  public logout(): void{
    this.router.navigate(['/login']);
    this.alertService.alerts.next(new alert("You have been signed out."));
  }

}
