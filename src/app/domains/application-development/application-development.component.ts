import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-application-development',
  templateUrl: './application-development.component.html',
  styleUrls: ['./application-development.component.scss']
})
export class ApplicationDevelopmentComponent {
addtag(arg0: string) {
throw new Error('Method not implemented.');
}

  latestApplicationData : any;

  constructor(
    private ecomService:EcommBackendService,
    private title:Title,
    private readonly meta: Meta
  ){}
  
  ngOnInit():void{
    this.title.setTitle("Application Development | Quadrant Knowledge Solutions");
    this.meta.updateTag({ name: 'keywords', content: 'Application Development, Software Development, Custom App Solutions' });

  this.meta.updateTag({ name: 'description', content: 'Application Development Services are crucial for online businesses, enabling rapid customer access and adaptability. QKS offers strategic technology research, market insights, and analyst briefings to help businesses understand industry trends and opportunities.' });
    
   

    this.ecomService.getLatestApplicationDevelopmentDomainData().subscribe((response:any)=>{
      // console.log(response)
      if(response.status === "OK"){
        
        this.latestApplicationData = response.domainResponse;

        console.log(this.latestApplicationData)
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
