import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  @Input() totalPrice: number | undefined;
  @Input() set enteredCupon(enteredCupon: string | undefined) {
    if (enteredCupon) {
      this.checkCuponIsValid(enteredCupon);
    }
  };

  displayDiscount: boolean = false;

  validCupons: Array<string> = ['SHELL', 'HOST', 'MFE'];


  checkCuponIsValid(cupon: string) {
    if (this.validCupons.indexOf(cupon) > -1) {
      this.displayDiscount = true;
    }
  }
  

}
