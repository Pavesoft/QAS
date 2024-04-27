import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-enterprise-architecture-planning',
  templateUrl: './enterprise-architecture-planning.component.html',
  styleUrls: ['./enterprise-architecture-planning.component.scss']
})
export class EnterpriseArchitecturePlanningComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Enterprise Architecture Planning | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Enterprise Architecture Planning, Architecture Planning, IT Strategy' });

    this.meta.updateTag({ name: 'description', content: 'Enterprise Architecture Planning prioritizes IT initiatives and roadmaps to streamline processes, enhance employee productivity, and improve ROI. Quadrant Knowledge Solutions provides latest intelligence for future strategies.' });

  }
}
