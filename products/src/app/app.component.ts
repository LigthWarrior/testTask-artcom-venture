// I have done commented out the service, because the project wasn't deploiting for GitPages.

import { Component } from '@angular/core';
// import { Subscription } from 'rxjs';
import { Product } from './interfaces';
import { PRODUCTS } from './data';
// import { ProductsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';

  // products: Product[] = [];
  products: Product[] = PRODUCTS;
  entriesCurrentProduct: any;

  hidden: boolean = true;

  // private subscription: Subscription = new Subscription();

  private windowInnerHeight = document.documentElement.clientHeight;
  cardInnerHeight = (this.windowInnerHeight - 68) + 'px';
  tableInnerHeight = (this.windowInnerHeight - 174) + 'px';
  tableInnerHeightWithButton = (this.windowInnerHeight - 220) + 'px';

  displayedColumnsSideLeft: string[] = ['position', 'name'];
  displayedColumnsSideRight: string[] = ['property', 'value'];

  // constructor(private productsService: ProductsService) { }

  // ngOnInit(): void {
  //     this.subscription.add(this.getProducts());
  // }

  // private getProducts(): Subscription {
  //   return this.productsService.getProducts().subscribe((objects: Product[]) => {
  //     this.products = objects;
  //   });
  // }

  private returnToStartState(): void {
    const trNodes: any = document.getElementsByTagName("tr");

    for (let tr of trNodes) {
      tr.classList.remove("row-is-clicked");
    }

  }

  setKeyValueObject(object: Product): void {
    const filterProducts = Object.entries(object).filter(key => key[0] !== "ProductId").filter(key => key[0] !== "ProductDescription");
    filterProducts.forEach(item => {
      if (item[1] === null) item[1] = "it's unknown";
    });
    this.entriesCurrentProduct = filterProducts;
  }

  clickOnRows(event: Event): void {
    this.returnToStartState();

    let tableRow: any = event.currentTarget;
    tableRow.classList.add("row-is-clicked");

    const lastNameOnClick = tableRow.lastElementChild.textContent.trim();
    const currentProduct: any = this.products.find(item => item.ProductDescription === lastNameOnClick);
    this.setKeyValueObject(currentProduct);

    this.hidden = false;

    document.addEventListener('click', (event): void => {
      const currentTarget: any = event.target;
      const tagOnClick = currentTarget.tagName.toLowerCase();

      if (tagOnClick !== 'td') {
        this.returnToStartState();
      }
    });

  }

  close(): void {
    this.hidden = true;
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
