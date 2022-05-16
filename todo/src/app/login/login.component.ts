import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="praveen";
  password="";
  errorMessage="Invalid credentials";
  invalidLogin=false;

  //Router
  //Angular.giveMeRouter
  //Dependency injection
  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    //if(this.username ==='praveen' && this.password ==='dummy')
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin =false;
    }
    else
    {
      this.invalidLogin =true;
    }
    console.log(this.username+"Button clicking is working");
    console.log(this.password);
  }
}
