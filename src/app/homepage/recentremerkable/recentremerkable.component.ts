import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';

@Component({
  selector: 'app-recentremerkable',
  templateUrl: './recentremerkable.component.html',
  styleUrls: ['./recentremerkable.component.scss']
})
export class RecentremerkableComponent {

  latestreportData : any;

  constructor(
    private ecomService:EcommBackendService
  ){}
  
  ngOnInit():void{

    this.ecomService.getlatestreportdata().subscribe((response:any)=>{
      // console.log(response);
      if(response.status === "OK"){
        
        this.latestreportData = response.domainResponse;

        console.log(this.latestreportData)
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
