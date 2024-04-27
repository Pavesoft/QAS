import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-data-analytics-and-artificial-intelligence',
  templateUrl: './data-analytics-and-artificial-intelligence.component.html',
  styleUrls: ['./data-analytics-and-artificial-intelligence.component.scss']
})
export class DataAnalyticsAndArtificialIntelligenceComponent {

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Data, Analytics & Artificial Intelligence | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Data Analytics and Artificial Intelligence, AI Services, Analytics Solutions' });

    this.meta.updateTag({ name: 'description', content: 'Quadrant Knowledge Solutions offers strategic insights and advisory services in the rapidly evolving field of Data, Machine Learning, and Artificial Intelligence, providing insights into market trends and opportunities.' });

  }

}
