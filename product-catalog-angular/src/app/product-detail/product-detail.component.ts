import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from '../services/cart.service';
import { RestService } from '../services/rest.service';
import { Product } from '../product';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faFilledHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  faPlus = faPlus;
  faMinus = faMinus;
  faEmptyHeart = faEmptyHeart;
  faFilledHeart = faFilledHeart;
  quantity;
  quantityInCart;
  constructor(private route: ActivatedRoute, private cs: CartService, private rs: RestService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(result => {
        this.getProduct(result.id);
      });
    this.quantity = 1;
  }

  getProduct = (id) => {
    this.rs.getProduct(id).subscribe(
      (response) => {
        this.product = response;
        this.quantityInCart = this.getQuantityInCart();
      },
      (error) => console.log(error)
    );

  }

  addToCart() {
    this.cs.addToCartQuantity(this.product, this.quantity);
    this.quantityInCart = this.getQuantityInCart();
    this.quantity = 1;
  }

  getQuantityInCart() {
    return this.cs.getQuantityInCart(this.product);
  }

  increaseQuantity() {
    this.quantity = this.quantity + 1;
  }

  decreaseQuantity() {
    this.quantity = this.quantity - 1;

  }

}
