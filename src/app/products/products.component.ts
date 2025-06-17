import { Component, OnInit } from '@angular/core';
import { product } from '../modules/product.inteface';
import { mobileProducts } from '../consts/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
 mobileArr: Array<product> = mobileProducts

}
