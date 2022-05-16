import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    
  message='Some Welcome Message';
  welcomeMessageFromService:string='';
  name='';

  //ActivateRoute
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    // console.log(this.route.snapshot.params['name']);
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error =>this.handleErrorfullResponse(error)
    );
 }

 getWelcomeMessageWithParameter(){
  this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccessfullResponse(response),
    error =>this.handleErrorfullResponse(error)
  );
}


  handleSuccessfullResponse(response:any){
        this.welcomeMessageFromService =response.message;
}

handleErrorfullResponse(error:any){
  console.log(error);
  console.log(error.error);
  console.log(error.error.message);
  this.welcomeMessageFromService =error.error.message;
}

}
