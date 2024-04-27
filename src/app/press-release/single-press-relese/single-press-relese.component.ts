import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title,Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/Interfaces/api-response';
import { PressReleseList, ResearchMasterDto } from 'src/app/Interfaces/research-master-dto';
import { CartService } from 'src/app/Services/cart.service';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';

@Component({
  selector: 'app-single-press-relese',
  templateUrl: './single-press-relese.component.html',
  styleUrls: ['./single-press-relese.component.scss']
})
export class SinglePressReleseComponent {

  ResearchDetails: any = [];
  researchMaster: PressReleseList = {} as PressReleseList;
  alertType: string = "";
  message: string = "";
  showOverlay: boolean = true;
  totalCartNo:any = '';
  errorMessage: string='';
  isLoading:boolean = false;
  metaService: any;
  
  constructor(private ecommBackendService: EcommBackendService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    private titleService:Title,
    private meta :Meta) { }

  ngOnInit(): void {

    

      
    this.route.queryParams.subscribe((params) => {
      const researchId = params['pressReleseId'];
      this.researchMaster = history.state.researchData;
      console.log(this.route.params)
      let blogId = this.route.snapshot.params['pressReleseName-:pressReleseId'];
      const matches = blogId.match(/-(\d+)$/); // Extract numeric part following the last dash "-"
  
      if (matches && matches.length > 1) {
        const reportId = matches[1];
        this.getResearchById(reportId);
       
      } else {
        // Handle the case where there is no valid reportId
        console.error('Invalid reportId');
      }

      //console.log(this.route.snapshot.params)
      // let id = this.route.snapshot.params['pressReleseName'];
      // var reportId = id.substr(id.length - 3)

      // this.getResearchById(Number.parseInt(reportId));
      ////console.log(researchId)
    });
  }

  downloadForm(pressReleseData:any){

    //console.log(research)

    const urlFriendlyName = this.getUrlFriendlyString(pressReleseData.blogTitle);
    const url = `/download-form/press-release/${urlFriendlyName}-${pressReleseData.id}`;

    if (pressReleseData && pressReleseData.id && pressReleseData.blogTitle) {
      //console.log(research.blogTitle)
      this.router.navigate([url], {
        state: {
          pressReleseData: pressReleseData
        }
      });
    } else {
      console.error('Selected research not found in the filtered data.');
    }

  }

  private getUrlFriendlyString(input: string): string {
    // Replace special characters with dashes and convert to lowercase
    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-');
  }

  showResearchDetails(research: any): void {
    // //console.log(research)
    //console.log(research)
    const urlFriendlyName = this.getUrlFriendlyString(research.blogTitle);
    const url = `/press-release/${urlFriendlyName}-${research.id}`;

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

    if (research && research.id && research.blogTitle) {
      //console.log(research.blogTitle)
      this.router.navigate([url], {
        state: {
          pressReleseData: research
        }
        
      });

      

    } else {
      console.error('Selected research not found in the filtered data.');
    }
  }

  getResearchById(id: number): void {
    this.isLoading = true;
    this.ecommBackendService.getPressReleaseById(id).subscribe(
      (response: ApiResponse) => {
        // //console.log(response)
        if (response.success) {
          this.showResearchDetails(response.singlePressRelease)
          this.researchMaster = response.singlePressRelease;
          this.titleService.setTitle(response.singlePressRelease.blogTitle)
          this.isLoading = false;

     

    
          // Handle the successful response here
        } else {
          this.errorMessage = response.message;
          // Handle the error response here
        }
      },
      (error) => {
        this.errorMessage = 'Error occurred while fetching blog.';
        // Handle any HTTP errors here
        // this.router.navigate(['not-found'])
      }
    );
  }

}
