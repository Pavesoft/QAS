import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email= '';
  password= '';

  constructor(private authService: EcommBackendService, private sessionData: MasterService) {}

  onSubmit() {
    
    // if (this.email && this.password) {
    //   // Call the login method from the AuthService passing the email and password
    //   let loginSuccessful;
      
    //   this.authService.userLogin(this.email, this.password).subscribe((result:any)=>{
        
    //     if(result != null){
    //       loginSuccessful = result;
        
    //       localStorage.setItem("token",result.jwtToken);
    //       localStorage.setItem("username",result.username);

    //       alert("logged in")

    //       location.reload();
          
    //     }

    //   });
    // }
  }

}
