import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-data-management-service',
  templateUrl: './data-management-service.component.html',
  styleUrls: ['./data-management-service.component.scss']
})
export class DataManagementServiceComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Data Management Service | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Data Management Services, Data Governance, Information Management' });

    this.meta.updateTag({ name: 'description', content: 'The Data Management Service System enhances data analytics access, enabling organizations to optimize operations and identify opportunities for change. QKS subscription service provides strategic research, market insights, and consulting services for strategic planning.' });

  }

}
