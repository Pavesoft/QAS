import {HttpClient} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from 'environment.prod';
import {IPayPalConfig, ICreateOrderRequest} from 'ngx-paypal';
import {CartService} from 'src/app/Services/cart.service';
import {EcommBackendService} from 'src/app/Services/ecomm-backend-service.service';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({selector: 'app-payment', templateUrl: './payment.component.html', styleUrls: ['./payment.component.scss']})

export class PaymentComponent implements OnInit {
    total = 0;
    public payPalConfig?: IPayPalConfig;

    @ViewChild('paymentRef', {static: true})paymentRef !: ElementRef;

    embedTarget = 'embed-target';
    response : any;
    sessionID : string = '';
    successIndicator : string = '';
    uid : string = '';
    script : any;
    orderId : any;
    constructor(private ecommService : EcommBackendService, private router : Router, private route : ActivatedRoute, private http : HttpClient, private cartService : CartService) {}

    ngOnInit(): void {
        this.total = this.cartService.getTotalPrice()
        render({
            id: "#paymentRef",
            currency: "USD",
            value: this.cartService.getTotalPrice().toString(),
            onApprove: (details) => {
                this.router.navigate(['/thank-you']);
            }
        })

        this.route.queryParams.subscribe((params) => {
            this.sessionID = params['sessionID'];
            this.successIndicator = params['successIndicator'];
            this.uid = params['uid'];
        });

        (window as any).errorCallback = this.errorCallback;
        (window as any).cancelCallback = this.cancelCallback;
        (window as any).completeCallback = this.completeCallback;

        Checkout.configure({
            session: {
                id: this.sessionID
            }
        });


    }
    /** 
 * window.paypal.Buttons({
            style: {
                layout: 'vertical',
                color:  'blue',
                shape:  'rect',
                label:  'paypal'
              },
              createOrderOnClient:(data:any,actions:any)=>{
                //console.log(data)
                //console.log(actions)
                return actions.order.create({
                    intent : "CAPTURE"
                    
                })
              },
              onApprove:(data:any,actions:any)=>{
                return actions.order.capture().then((response:any)=>{
                    //console.log(response)
                    if(response.status==="COMPLETED"){
                        this.ecommService.paypalData(response.id);
                        this.router.navigate(['/thank-you']);
                    }
                })
              },
              onError:(error:any)=>{
                //console.log(error)
              },
              onCancel:(data:any)=>{
                //console.log(data)
              }

        }).render(this.paymentRef.nativeElement); **/
    // ----------------------------------------------------------------------------------
    createItemList() {
        let items: any = [];
        let item = {
            name: '',
            quantity: '1',
            category: '',
            unit_amount: {
                currency_code: '',
                value: ''
            }
        };
        let tot = Number(item.unit_amount.value) * Number(item.quantity);
        // console.log(tot)
        this.cartService.cart.forEach(element => {

            item.name = element.research.report,
            item.quantity = '1',
            item.category = 'DIGITAL_GOODS',
            item.unit_amount.currency_code = 'USD',
            item.unit_amount.value = tot.toString()
            items.push(item);
        });

        // console.log(items)

        return items;
    }

    // private initConfig(): void {
    //     this.payPalConfig = {
    //         currency: 'USD',
    //         clientId: 'AS-cocQmqKl6gdB3aAALqMA8LTuYipD04eo1RobS2GwObPc1mF-ctZZYr8ApNIDhDMImLuK1WTeNbzKa',
    //         createOrderOnClient: (data) => < ICreateOrderRequest > {
    //             intent: 'CAPTURE',
    // purchase_units: [{
    //     amount: {
    //         currency_code: 'USD',
    //         value: this.cartService.getTotalPrice().toString(),
    //         breakdown: {
    //             item_total: {
    //                 currency_code: 'USD',
    //                 value: this.cartService.getTotalPrice().toString()
    //             }
    //         }
    //     },items: this.createItemList()

    // }]
    //         },
    //         advanced: {
    //             commit: 'true'
    //         },
    //         style: {
    //             label: 'paypal',
    //             layout: 'vertical',
    //             shape:'rect',
    //             color:'blue'
    //         },
    //         onApprove: (data, actions) => {
    //             //console.log('onApprove - transaction was approved, but not authorized', data, actions);
    //             actions.order.get().then((details: any) => {
    //                 //console.log('onApprove - you can get full order details inside onApprove: ', details);
    //             });

    //             this.ecommService.setPaymentFlag(this.uid).subscribe((response:any)=>{
    //                 //console.log(response)
    //                 //console.log("Paypal Payment Success !")
    //                 this.router.navigate(['thank-you']);
    //             });


    //         },
    //         onClientAuthorization: (data) => {
    //             //console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

    //         },
    //         onCancel: (data, actions) => {
    //             //console.log('OnCancel', data, actions);

    //         },
    //         onError: err => {
    //             //console.log('OnError', err);
    //         },
    //         onClick: (data, actions) => {
    //             //console.log('onClick', data, actions);
    //         }
    //     };
    // }
    // ----------------------------------------------------------------------------------

    errorCallback(error : any) {
        if (error != null) {
            alert(JSON.stringify(error));
        }
        // //console.log(error);
    }

    cancelCallback() { // //console.log('Payment cancelled');
    }

    completeCallback(resultIndicator : string, sessionVersion : string,) { // //console.log("resultIndicator, sessionVersion" + JSON.stringify(resultIndicator) + " " + JSON.stringify(sessionVersion));
    }

    // showPaymentPage() {
    //     const url = 'https://hdfcbank.test.gateway.mastercard.com/checkout/pay/'+this.sessionID+'?checkoutVersion=1.0.0';

    //     const windowOptions = 'width=800,height=600'; // Customize the window dimensions if needed

    //     window.open(url, '_blank', windowOptions);
    //     // Checkout.showPaymentPage();
    // }

    showPaymentPage() {
        // environment.apiUrl
        // https://hdfcbank.test.gateway.mastercard.com/checkout/pay/
        const sessionID = localStorage.getItem("HDFCSessionID");
        this.orderId = localStorage.getItem("HDFCOrderID");
        const url = "https://hdfcbank.gateway.mastercard.com/checkout/pay/" + sessionID + '?checkoutVersion=1.0.0';
        const windowOptions = 'width=800,height=600';

        const paymentWindow = window.open(url, '_blank', windowOptions);

        if (! paymentWindow) {
            alert('Payment window could not be opened. Please check your popup settings.');
            return;
        }

        // Define the time in milliseconds after which the window should be closed
        const closeDelay = 40000; // 10 seconds (modify this as needed)

        setTimeout(() => {
            
            // if (paymentWindow.closed) {
            //     this.router.navigate(['/market-research']);
            // }
            paymentWindow.close();

        }, closeDelay);
    }

    wip() {
        alert("This Mode Is Currently Under Construction !")
    }
}
