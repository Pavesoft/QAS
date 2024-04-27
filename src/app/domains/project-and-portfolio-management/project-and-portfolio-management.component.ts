import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-project-and-portfolio-management',
  templateUrl: './project-and-portfolio-management.component.html',
  styleUrls: ['./project-and-portfolio-management.component.scss']
})
export class ProjectAndPortfolioManagementComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Project & Portfolio Management | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Project and Portfolio Management, Portfolio Management, Project Optimization' });

  this.meta.updateTag({ name: 'description', content: 'Project and Portfolio Management (PPM) enhances business processes, optimizing value and achieving goals. Quadrant Knowledge Solutions provides market intelligence and expert guidance for strategic planning and implementation.' });
    
   
  }

}
