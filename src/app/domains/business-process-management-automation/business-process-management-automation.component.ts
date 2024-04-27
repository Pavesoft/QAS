import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Meta } from '@angular/platform-browser';




@Component({
  selector: 'app-business-process-management-automation',
  templateUrl: './business-process-management-automation.component.html',
  styleUrls: ['./business-process-management-automation.component.scss']
})
export class BusinessProcessManagementAutomationComponent {


  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("BPM & Process Automation | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Business Process Management, Workflow Automation, Process Optimization' });

    this.meta.updateTag({ name: 'description', content: 'BPM and Automation are crucial for companies seeking competitive advantage and profitability. QKS offers intelligent solutions to optimize processes, keeping up with market trends and emerging opportunities.' });

  }
}
