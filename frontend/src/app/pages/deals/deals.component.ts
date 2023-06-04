import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  productUrl: any;
  product: any;

  getProductDetails() {
    const url = new URL(this.productUrl);

    // Extract product ID

    // Extract product name
    const pathParts = url.pathname.split('/');
    const productName = pathParts[1];
    this.product.productName = productName;

    // Extract other details
  }

}
