import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-retail-and-ecommerce',
  templateUrl: './retail-and-ecommerce.component.html',
  styleUrls: ['./retail-and-ecommerce.component.scss']
})
export class RetailAndEcommerceComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Retail & eCommerce | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Retail and E-commerce Solutions, E-commerce Services, Retail Technology' });

    this.meta.updateTag({ name: 'description', content: 'Quadrant Knowledge Solutions offers strategic technology research, market insight, opportunities, and consulting for retail and eCommerce businesses, incorporating latest trends and best practices for effective decision-making.' });
      
     


  }

}
