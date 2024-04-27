import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.component.html',
  styleUrls: ['./payment-failed.component.scss']
})
export class PaymentFailedComponent {

  resultIndicator: string | undefined;
  sessionVersion: string | undefined;
  checkoutVersion: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Use ActivatedRoute to get the query parameters
    this.route.queryParams.subscribe(params => {
      this.resultIndicator = params['resultIndicator'];
      this.sessionVersion = params['sessionVersion'];
      this.checkoutVersion = params['checkoutVersion'];
      // Now you have access to these parameters and can handle them as needed
      // For example, you can display them in your template or perform actions based on the payment result
    });

    alert(this.resultIndicator)
  }
}
