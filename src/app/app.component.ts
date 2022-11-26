import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public dollarExRate: number = 4.5;
  public markUp: number = 4.5;
  public discount: number = 0.7;
  public priceInDollar: number = 0;
  public priceInPLN: number = 0;
  public priceAfterDiscount: number = 0;
  public finalPrice: number = 0;

  readonly priceForm: FormGroup = new FormGroup({ price: new FormControl() });

  calculate(price: FormGroup) {
    this.getPrice(price);
    this.convertToPLN();
  }

  getPrice(price: FormGroup) {
    this.priceInDollar = price.get('price')?.value;
  }

  convertToPLN() {
    this.priceInPLN = this.priceInDollar * this.dollarExRate * this.markUp;
    this.priceAfterDiscount = this.priceInPLN * this.discount;
  }

  ceilPriceInPLN() {
    if (this.priceInPLN < 39) {
      this.priceInPLN = 39;
    }
    return this.priceInPLN < 45 ? 45 : Math.ceil(this.priceInPLN);
  }

  showFinalPrice(): number {
    if (this.priceAfterDiscount <= 39) {
      return (this.finalPrice = 39.9);
    }
    if (this.priceAfterDiscount <= 45) {
      return (this.finalPrice = 44.9);
    }
    if (this.priceAfterDiscount > 45 && this.priceAfterDiscount <= 50) {
      return (this.finalPrice = 49.9);
    }
    if (this.priceAfterDiscount > 50 && this.priceAfterDiscount <= 55) {
      return (this.finalPrice = 54.9);
    }
    if (this.priceAfterDiscount > 55 && this.priceAfterDiscount <= 60) {
      return (this.finalPrice = 59.9);
    }
    if (this.priceAfterDiscount > 60 && this.priceAfterDiscount <= 65) {
      return (this.finalPrice = 64.9);
    }
    if (this.priceAfterDiscount > 65 && this.priceAfterDiscount <= 70) {
      return (this.finalPrice = 69.9);
    }
    if (this.priceAfterDiscount > 70 && this.priceAfterDiscount <= 75) {
      return (this.finalPrice = 74.9);
    }
    if (this.priceAfterDiscount > 75 && this.priceAfterDiscount <= 80) {
      return (this.finalPrice = 80.9);
    }
    if (this.priceAfterDiscount > 80 && this.priceAfterDiscount <= 85) {
      return (this.finalPrice = 84.9);
    }
    if (this.priceAfterDiscount > 85 && this.priceAfterDiscount <= 90) {
      return (this.finalPrice = 90.9);
    }
    if (this.priceAfterDiscount > 90 && this.priceAfterDiscount <= 95) {
      return (this.finalPrice = 94.9);
    }
    if (this.priceAfterDiscount > 95 && this.priceAfterDiscount <= 100) {
      return (this.finalPrice = 99.9);
    }
    if (this.priceAfterDiscount > 100 && this.priceAfterDiscount <= 105) {
      return (this.finalPrice = 104.9);
    }
    if (this.priceAfterDiscount > 105 && this.priceAfterDiscount <= 110) {
      return (this.finalPrice = 109.9);
    }
    if (this.priceAfterDiscount > 110 && this.priceAfterDiscount <= 115) {
      return (this.finalPrice = 114.9);
    }
    if (this.priceAfterDiscount > 115 && this.priceAfterDiscount <= 120) {
      return (this.finalPrice = 119.9);
    }
    if (this.priceAfterDiscount > 120 && this.priceAfterDiscount <= 125) {
      return (this.finalPrice = 124.9);
    }
    if (this.priceAfterDiscount > 125 && this.priceAfterDiscount <= 130) {
      return (this.finalPrice = 129.9);
    }
    if (this.priceAfterDiscount > 130 && this.priceAfterDiscount <= 135) {
      return (this.finalPrice = 134.9);
    }
    if (this.priceAfterDiscount > 135 && this.priceAfterDiscount <= 140) {
      return (this.finalPrice = 139.9);
    }
    if (this.priceAfterDiscount > 140 && this.priceAfterDiscount <= 145) {
      return (this.finalPrice = 144.9);
    }
    return 0;
  }
}
