import { Component } from '@angular/core';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {

  searchText : string = '';

  constructor(private ecommService : EcommBackendService){}

  searchForText(){
    this.ecommService.searchByName(this.searchText).subscribe((response:any)=>{
      
      if(response.blogList){
        //console.log(response.blogList)
      }else if(response.researchMasterList){
        //console.log(response.researchMasterList)
      }
    })
  }

  // removeBackdrop(){
  //   console.log("runingn")
  //   document.querySelector(".offcanvas-backdrop")?.remove();
  // }
}
