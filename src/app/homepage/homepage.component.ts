import { Component, OnInit } from '@angular/core';
// import { NgcCookieConsentService } from 'ngx-cookieconsent/lib/service';
// import { NgcCookieConsent, NgcCookieConsentService } from 'ngx-cookieconsent';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private cookie:CookieService) { }
  cookiebox:boolean = false;
  ngOnInit(): void {
    window.onbeforeunload = function() {
    };
  
    window.onbeforeunload = null;
    
    this.Check();
  }
  Check(){
    const checking =   this.cookie.check('data');

    if(checking){
      this.cookiebox = false;
    }
    else{
      this.cookiebox = true;
    }

  }
  Allow(){
    this.cookie.set('data','codetodo',{expires:1})

    this.cookiebox = false;
  }

  Decline(){
    
    this.cookiebox = false;
  }

}
