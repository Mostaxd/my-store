import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = []

  total: number = 0;
  name: string = ''
  address: string = ''
  creditCard: string = ''

  itemsMap = new Map<Product, number>();


  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.itemsMap = this.cartService.getCartList()
    this.total = this.cartService.getTotal()
  }

  clearCart() {
    this.cartService.clearCart()
    this.ngOnInit()
  }

  removeItem(product : Product) {
    this.cartService.removeItem(product)
    window.alert(`${product.title}is removed from cart`)
    this.ngOnInit()
  }


  submitForm() {
    if (this.cartItems.length === 0) {
      window.alert('please add products to the cart!')
    }
    else {
      window.alert('success!')
      this.router.navigate(['success']);
    }

  }


  detectNameChange(value: string){
    this.name = value;
  }

  detectAddressChange(value: string){
    this.address = value;
  }

  detectCardChange(value: string){
    this.creditCard = value;
  }


}
