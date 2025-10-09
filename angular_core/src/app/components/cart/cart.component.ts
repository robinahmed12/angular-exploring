import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: CartItem []= []
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
