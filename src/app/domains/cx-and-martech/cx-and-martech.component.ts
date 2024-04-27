import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-cx-and-martech',
  templateUrl: './cx-and-martech.component.html',
  styleUrls: ['./cx-and-martech.component.scss']
})
export class CxAndMartechComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("CX & MarTech | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Customer Experience (CX) & MarTech, MarTech Solutions, Customer Engagement' });

    this.meta.updateTag({ name: 'description', content: 'QKS offers strategic technology research and consulting services to help companies create a successful Customer Experience strategy, leveraging AI, ML, and analytics in marketing technologies, resulting in profitability and loyalty.' });

  }
}
