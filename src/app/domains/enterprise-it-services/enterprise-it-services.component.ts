import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-enterprise-it-services',
  templateUrl: './enterprise-it-services.component.html',
  styleUrls: ['./enterprise-it-services.component.scss']
})
export class EnterpriseItServicesComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Enterprise IT Services | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Enterprise IT Services, IT Solutions, Business Technology' });

    this.meta.updateTag({ name: 'description', content: 'Enterprise IT Services help companies manage applications, systems, and networks, optimize security, and enhance customer experience. Quadrant Knowledge Solutions provides market insights and strategic planning based on unique business needs and requirements.' });

  }
  

}
