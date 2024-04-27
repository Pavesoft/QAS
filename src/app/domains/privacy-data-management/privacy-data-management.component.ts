import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-privacy-data-management',
  templateUrl: './privacy-data-management.component.html',
  styleUrls: ['./privacy-data-management.component.scss']
})
export class PrivacyDataManagementComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Privacy Data Management | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Privacy Data Management, Data Protection, Privacy Compliance' });

    this.meta.updateTag({ name: 'description', content: 'Privacy Data Management tools safeguard enterprise data volume, simplify compliance, build trust, unify governance, and protect against breaches. Quadrant Knowledge Solutions provides strategic insights for compliance needs.' });
      
    
    
  }

}
