import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.mode';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;

  @Output() addToCart = new EventEmitter(); // Comunica desde el hijo al padre

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit('Hola este es un mensaje desde el hijo ' + this.product.title);
  }
}
