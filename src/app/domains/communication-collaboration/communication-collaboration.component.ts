import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-communication-collaboration',
  templateUrl: './communication-collaboration.component.html',
  styleUrls: ['./communication-collaboration.component.scss']
})
export class CommunicationCollaborationComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Communication & Collaboration | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Communication Solutions, Collaboration Tools, Unified Communication' });

    this.meta.updateTag({ name: 'description', content: 'New communication solutions like Unified Communications and CCAaS are enhancing employee engagement, flexibility, and cost reduction. Organizations must strategize to fully benefit from these technologies, utilizing QKS custom research and subscription services.' });

  }
}
