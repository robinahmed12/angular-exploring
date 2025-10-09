import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];

  addItem() {}

  removeItem() {}

  getItem() {}

  clearCart() {}
  constructor() {}
}
