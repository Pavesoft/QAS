import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-information-security',
  templateUrl: './information-security.component.html',
  styleUrls: ['./information-security.component.scss']
})
export class InformationSecurityComponent {
  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Information Security | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Information Security, Cybersecurity, Data Protection' });

    this.meta.updateTag({ name: 'description', content: 'Data security is crucial for organizations, costing billions of dollars. Quadrant Knowledge Solutions offers strategic technology research, market insight, and consulting in information security, helping businesses minimize risks and costs.' });

  }

}
