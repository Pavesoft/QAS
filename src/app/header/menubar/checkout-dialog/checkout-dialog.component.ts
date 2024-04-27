import {Component, OnInit,Inject,Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EcommBackendService } from 'src/app/Services/ecomm-backend-service.service';
import { ApiResponse } from 'src/app/Interfaces/api-response';
// import * as external from 'assets/fonts/checkout.min.js';

@Component({selector: 'app-checkout-dialog', 
templateUrl: './checkout-dialog.component.html', 
styleUrls: ['./checkout-dialog.component.scss']
})
export class CheckoutDialogComponent {
  declare Checkout: any;
    response : any;
    resultIndicator : string = '';
    sessionVersion : string = '';
    script:any;
    originMatch:boolean = false;
    constructor(private router : Router,private ecommService:EcommBackendService ,private route : ActivatedRoute,private renderer: Renderer2,private http: HttpClient) {
    }

    ngOnInit() {
      
        this.route.queryParams.subscribe((params) => {
            this.resultIndicator = params['resultIndicator'];
            this.sessionVersion = params['sessionVersion']
        });


        let successIndicator = localStorage.getItem("HDFCSessionSuccessIndicator");
        let origin = localStorage.getItem("Origin")

        // alert(this.resultIndicator + " " + successIndicator)

        //console.log(this.resultIndicator + ": session :" +successIndicator)
        let uid = "";

        if(successIndicator === this.resultIndicator){
            this.ecommService.setPaymentFlag(uid,successIndicator).subscribe((response:any)=>{
                console.log(response)
            })
        }else{
            console.log("error : payment_not_completed, please contact support@quadrant-solutions.com with your details used when placing order.")
        }
        
        if(window.location.host === origin){
            if(successIndicator === this.resultIndicator){
                this.ecommService.setPaymentFlag(uid,successIndicator).subscribe((response:any)=>{
                    console.log(response)
                })
            }else{
                console.log("error : payment_not_completed, please contact support@quadrant-solutions.com with your details used when placing order.")
            }
        }else{
            console.log("error : 203 Non-Authoritative Information OR origin_mismatch, please contact support@quadrant-solutions.com with your details used when placing order.")
        }


        setTimeout(() => {
            window.close()
        }, 25000);
        
        // alert("payment success")

    }


}
