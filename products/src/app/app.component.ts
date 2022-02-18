import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Product } from './interfaces';

import { ProductsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'products';

  products: Product[] = [];
  productTitles: String[] = [];
  // convertProductTitles: ProductTitle[] = [];
  private subscription: Subscription = new Subscription();

  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource<Product>(this.products);

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
      this.subscription.add(this.getProducts());
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private getProducts(): Subscription {
    return this.productsService.getProducts().subscribe((objects: Product[]) => {
      this.products = objects;
      // this.getProductTitle();
      // this.setProductTitles();
    });
  }

  // private getProductTitle(): void {
  //   this.productTitles = this.products.map((item) => item.ProductDescription);
  // }

  // private setProductTitles(): void {
  //   for(let i = 0, c = 1; i < this.productTitles.length; i++, c++) {
  //     const tempProductTitle: any = {};
  //     tempProductTitle.position = c;
  //     tempProductTitle.name = this.productTitles[i];
  //     this.convertProductTitles.push(tempProductTitle);
  //   }
  // }


  // dataSource = ELEMENT_DATA;
  // dataSource = this.convertProductTitles;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
