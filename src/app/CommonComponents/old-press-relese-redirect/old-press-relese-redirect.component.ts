import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({selector: 'app-old-press-relese-redirect', templateUrl: './old-press-relese-redirect.component.html', styleUrls: ['./old-press-relese-redirect.component.scss']})
export class OldPressReleseRedirectComponent {

    constructor(private route : ActivatedRoute, private router : Router) {}

    ngOnInit(): void { // Get the current full URL, including the domain
      // alert("blog redirect")
        // const currentUrl = window.location.pathname.replace(/^\/+/, '');

        // let found = false;
        // this.urlMappings.mappings.forEach((element : any) => {
        //     if (element["From URL"] === currentUrl) { // Handle the case where the URL is found
        //         found = true;
        //         const newUrl = element["To URL"];
        //         console.log(newUrl)
        //         this.router.navigateByUrl(newUrl);
        //     }
        // });
        // if (! found) {
        //     console.log("Current URL not found");
        // }
    }

}
