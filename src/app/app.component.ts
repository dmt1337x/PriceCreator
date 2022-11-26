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
    return this.priceInPLN < 45 ? 44.9 : Math.ceil(this.priceInPLN) - 0.1;
  }

  showFinalPrice(): number {
    if (this.priceAfterDiscount <= 39) {
      return (this.finalPrice = 39.9) && (this.priceInPLN = 39.9);
    }
    if (this.priceAfterDiscount > 39 && this.priceAfterDiscount <= 45) {
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
    if (this.priceAfterDiscount > 145 && this.priceAfterDiscount <= 150) {
      return (this.finalPrice = 149.9);
    }
    if (this.priceAfterDiscount > 150 && this.priceAfterDiscount <= 155) {
      return (this.finalPrice = 154.9);
    }
    if (this.priceAfterDiscount > 155 && this.priceAfterDiscount <= 160) {
      return (this.finalPrice = 159.9);
    }
    if (this.priceAfterDiscount > 160 && this.priceAfterDiscount <= 165) {
      return (this.finalPrice = 164.9);
    }
    if (this.priceAfterDiscount > 165 && this.priceAfterDiscount <= 170) {
      return (this.finalPrice = 169.9);
    }
    if (this.priceAfterDiscount > 170 && this.priceAfterDiscount <= 180) {
      return (this.finalPrice = 179.9);
    }
    if (this.priceAfterDiscount > 180 && this.priceAfterDiscount <= 190) {
      return (this.finalPrice = 189.9);
    }
    if (this.priceAfterDiscount > 190 && this.priceAfterDiscount <= 200) {
      return (this.finalPrice = 199.9);
    }
    if (this.priceAfterDiscount > 200 && this.priceAfterDiscount <= 210) {
      return (this.finalPrice = 209.9);
    }
    if (this.priceAfterDiscount > 210 && this.priceAfterDiscount <= 220) {
      return (this.finalPrice = 219.9);
    }
    if (this.priceAfterDiscount > 220 && this.priceAfterDiscount <= 230) {
      return (this.finalPrice = 229.9);
    }
    if (this.priceAfterDiscount > 230 && this.priceAfterDiscount <= 240) {
      return (this.finalPrice = 239.9);
    }
    if (this.priceAfterDiscount > 240 && this.priceAfterDiscount <= 250) {
      return (this.finalPrice = 249.9);
    }
    if (this.priceAfterDiscount > 250 && this.priceAfterDiscount <= 260) {
      return (this.finalPrice = 259.9);
    }
    if (this.priceAfterDiscount > 260 && this.priceAfterDiscount <= 270) {
      return (this.finalPrice = 269.9);
    }
    if (this.priceAfterDiscount > 270 && this.priceAfterDiscount <= 280) {
      return (this.finalPrice = 279.9);
    }
    if (this.priceAfterDiscount > 280 && this.priceAfterDiscount <= 290) {
      return (this.finalPrice = 289.9);
    }
    if (this.priceAfterDiscount > 290 && this.priceAfterDiscount <= 300) {
      return (this.finalPrice = 299.9);
    }
    if (this.priceAfterDiscount > 300 && this.priceAfterDiscount <= 310) {
      return (this.finalPrice = 309.9);
    }

    return 0;
  }
}
