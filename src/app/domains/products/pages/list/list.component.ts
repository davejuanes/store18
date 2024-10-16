import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.mode';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 3000,
        image: 'https://picsum.photos/640/640?r=21',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 3',
        price: 7000,
        image: 'https://picsum.photos/640/640?r=28',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 3000,
        image: 'https://picsum.photos/640/640?r=21',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 3',
        price: 7000,
        image: 'https://picsum.photos/640/640?r=28',
        creationAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) { // Se necesita para poder recibir los eventos de los componentes hijos
    this.cart.update(prevState => [...prevState, product]);  
  }
}
/* Ciclo de vida de componentes
constructor
ngOnChanges
ngOnInit
ngDoCheck
  ngAfterContentInit
  ngAfterContentChecked
  ngAfterViewInit
  ngAfterViewCheck
ngOnDistroy */