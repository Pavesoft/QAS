import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-financial-crime-and-compliance',
  templateUrl: './financial-crime-and-compliance.component.html',
  styleUrls: ['./financial-crime-and-compliance.component.scss']
})
export class FinancialCrimeAndComplianceComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Financial Crime & Compliance | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Financial Crime and Compliance, Financial Crime, Regulatory Compliance' });

    this.meta.updateTag({ name: 'description', content: 'Organizations prevent financial crime by implementing strong financial procedures and finding the right technology partner. Quadrant Knowledge Solutions financial crime & compliance research service provides intelligence for strategic planning.' });

  }

}
