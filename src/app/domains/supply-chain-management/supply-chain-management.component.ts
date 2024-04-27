import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-supply-chain-management',
  templateUrl: './supply-chain-management.component.html',
  styleUrls: ['./supply-chain-management.component.scss']
})
export class SupplyChainManagementComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Supply Chain Management | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Supply Chain Management Solutions, Logistics Solutions, SCM Services' });

    this.meta.updateTag({ name: 'description', content: 'Supply Chain Management Solutions by QKS guide strategic planning for supply, demand projection, production, and warehouse management, providing research-backed market insights to meet unique business needs and achieve transformation goals.' });
      
  }


}
