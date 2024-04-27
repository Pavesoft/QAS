import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-procurement-management',
  templateUrl: './procurement-management.component.html',
  styleUrls: ['./procurement-management.component.scss']
})
export class ProcurementManagementComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Procurement Management | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Procurement Management, Sourcing Solutions, Supply Chain Procurement' });

    this.meta.updateTag({ name: 'description', content: 'The procurement process is increasingly complex and dynamic, necessitating advanced methods for cost savings, product development speed, and quality assurance. Quadrant Knowledge Solutions offers strategic services for procurement subscriptions.' });
      

  }

}
