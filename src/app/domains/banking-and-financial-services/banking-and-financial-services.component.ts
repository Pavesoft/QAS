import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-banking-and-financial-services',
  templateUrl: './banking-and-financial-services.component.html',
  styleUrls: ['./banking-and-financial-services.component.scss']
})
export class BankingAndFinancialServicesComponent {

  latestBankingFinancialData : any;

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta


  ){}
  
  ngOnInit():void{
    this.title.setTitle("Banking & Financial Services | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Banking and Financial Services Solutions, Banking Solutions, Fintech Services' });

    this.meta.updateTag({ name: 'description', content: 'Banking and Financial Services are experiencing steady growth in the digital economy, with organizations seeking to streamline services and protect investments. QKS offers strategic technology research, market insight, and consulting in this sector.' });


    this.ecomService.getLatestBankingFinancialDomainData().subscribe((response:any)=>{
      // console.log(response)
      if(response.status === "OK"){
        
        this.latestBankingFinancialData = response.domainResponse;

        console.log(this.latestBankingFinancialData)
      }
      
    })
  }

  getFormattedDescription(description : any): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = description;
    return tempElement.innerText.trim();
  }

  getUrlFriendlyString(input : string): string { // Replace special characters with dashes and convert to lowercase
    return input.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
  }

}
