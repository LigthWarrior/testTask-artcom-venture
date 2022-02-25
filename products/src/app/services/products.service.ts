import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ROOT_URL: string = '../../../../assets/json/DATA.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ROOT_URL).pipe(
      map((response) => response),
    );
  }

}
