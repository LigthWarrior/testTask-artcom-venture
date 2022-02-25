import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Product, ProductTitle } from './interfaces';

import { ProductsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'products';

  length = 0;
  pageSize = 6;
  pageIndex = 0;
  pageSizeOptions = [6, 9, 12];
  showFirstLastButtons = true;

  products: Product[] = [];
  private productTitles: ProductTitle[] = [];
  paginationProductTitles: ProductTitle[] = [];
  private subscription: Subscription = new Subscription();
  displayedColumns: string[] = ['position', 'name'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
      this.subscription.add(this.getProducts());
  }

  private getProducts(): Subscription {
    return this.productsService.getProducts().subscribe((objects: Product[]) => {
      this.products = objects;
      this.convertProductTitles();
      this.paginationProductTitles = this.productTitles.slice(0, this.pageSize);
      this.length = this.productTitles.length;
    });
  }

  private convertProductTitles(): void {
    const productTitles = this.products.map((item) => item.ProductDescription);
    for(let i = 0, position = 1; i < productTitles.length; i++, position++) {
      const tempProductTitle: any = {};
      tempProductTitle.position = position;
      tempProductTitle.name = productTitles[i];
      this.productTitles.push(tempProductTitle);
    }
  }

  handlePageEvent(event: PageEvent): void {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    const startIndex = event.pageIndex * event.pageSize;

    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.productTitles.length) {
      endIndex = this.productTitles.length;
    }

    this.paginationProductTitles = this.productTitles.slice(startIndex, endIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
