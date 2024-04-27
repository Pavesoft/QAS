import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-internet-of-things-and-digitization',
  templateUrl: './internet-of-things-and-digitization.component.html',
  styleUrls: ['./internet-of-things-and-digitization.component.scss']
})
export class InternetOfThingsAndDigitizationComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Internet of Things & Digitization | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'IoT and Digitization, IoT Solutions, Digital Transformation' });

    this.meta.updateTag({ name: 'description', content: 'The Internet of Things (IoT) is transforming industries by connecting people, processes, and data, offering significant business opportunities. Quadrant Knowledge Solutions offers IoT research services to adapt to these megatrends.' });

  }

}
