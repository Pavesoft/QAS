import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-it-infrastructure-and-networking',
  templateUrl: './it-infrastructure-and-networking.component.html',
  styleUrls: ['./it-infrastructure-and-networking.component.scss']
})
export class ItInfrastructureAndNetworkingComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("IT Infrastructure & Networking | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'IT Infrastructure and Networking, Networking Services, IT Solutions' });

    this.meta.updateTag({ name: 'description', content: 'The right IT infrastructure enhances communication, efficiency, and productivity, providing a competitive edge. QKSs IT Infrastructure and Networking subscription service offers strategic research, market insights, and consulting.' });

  }


}
