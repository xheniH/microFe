import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  validCupons: Array<string> = ['SHELL', 'HOST', 'MFE'];
  displayDiscount: boolean = false;
  couponFormControl = new FormControl();
  totalCheckout: number = 0;

  @Input() set totalPrice(val: number | undefined) {
    this._totalPrice = val;
    if (val) {
      this.calculateTotalCheckout();
    } else {
      this.totalCheckout = 4;
    }
  }

  private _totalPrice: number | undefined;

  get totalPrice(): number | undefined {
    return this._totalPrice;
  }

  applyCoupon(): void {
    const coupon = this.couponFormControl.value;
    this.checkCuponIsValid(coupon);
  }

  checkCuponIsValid(cupon: string) {
    if (this.validCupons.indexOf(cupon) > -1) {
      this.displayDiscount = true;
      this.calculateTotalCheckout();
    }
  }

  calculateTotalCheckout(): void {
    if (this.totalPrice) {
      const totalPriceAndTax = this.totalPrice + 4;
      this.totalCheckout = this.displayDiscount ? totalPriceAndTax - 10 : totalPriceAndTax;
    } else {
      this.totalCheckout = 4;
    }
  }

  makePurchase(): void {
    alert('This functionality is not implemented!');
  }
  
}
