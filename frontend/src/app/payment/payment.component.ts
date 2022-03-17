import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../app/services/payment.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  public price: number;
  public payPalConfig?: IPayPalConfig;
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getPrice();
    this.initConfig();
    console.log(this.price)
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'AXwrWHHNY1iVXntbG_55NTCi4WlYhq9WIR-T1xqV9T5Uf3K91OCFq4hvOTdoK_MH_pCA0W7oo_SPcBVI',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: this.price.toString(),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.price.toString()
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: this.price.toString(),
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      //this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

  getPrice() {
    this.paymentService.getOverallPrice().subscribe((price) => {
      this.price = Math.round(price * 100) / 100;
    })
  }

}
