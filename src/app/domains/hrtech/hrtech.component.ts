import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-hrtech',
  templateUrl: './hrtech.component.html',
  styleUrls: ['./hrtech.component.scss']
})
export class HrtechComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("HRTech | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'HR Technology Solutions, Human Resources Tech, HR Software' });

    this.meta.updateTag({ name: 'description', content: 'Advancements in technology have improved business operations, enhancing HR technology for efficient staff management, productivity, and compliance. Quadrant Knowledge Solutions HRTech services & research provide the latest intelligence for future strategies.' });

  }


}
