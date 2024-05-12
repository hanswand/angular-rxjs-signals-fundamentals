import { Component, inject } from '@angular/core';
import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';

import { EMPTY, catchError, tap } from 'rxjs';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgClass, ProductDetailComponent],
})
export class ProductListComponent {
  pageTitle = 'Products';
  errorMessage = '';

  private productSvc = inject(ProductService);

  // Products
  readonly products$ = this.productSvc.products$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  // Selected product id to highlight the entry
  readonly selectedProductId$ = this.productSvc.productSelected$
  onSelected(productId: number): void {
    this.productSvc.productSelected(productId);
  }
}
