import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-integrated-risk-management',
  templateUrl: './integrated-risk-management.component.html',
  styleUrls: ['./integrated-risk-management.component.scss']
})
export class IntegratedRiskManagementComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Integrated Risk Management | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Integrated Risk Management, Integrated Risk, Risk Mitigation' });

    this.meta.updateTag({ name: 'description', content: 'Integrated Risk Management methods consider all possibilities in business plans, enabling accurate risk analysis and better decision-making. QKSs services provide strategic technology research, market insights, and analyst briefings for effective risk management.' });

    
  }
}
