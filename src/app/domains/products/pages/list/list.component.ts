import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService)
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }

  addToCart(product: Product) { // Se necesita para poder recibir los eventos de los componentes hijos
    this.cartService.addToCart(product);
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

/* Prop drilling
El "Prop Drilling", también conocido como "Input Drilling" en Angular, se refiere a la complejidad de pasar datos entre componentes a través de múltiples niveles utilizando @Input y @Output. Este enfoque puede volverse complicado y difícil de mantener en estructuras de componentes profundas.

Solución:

Para evitar este problema, se puede utilizar un store o un mecanismo centralizado para manejar el estado de la aplicación. Esto permite que los componentes se suscriban directamente al estado que necesitan, evitando la necesidad de pasar datos y eventos manualmente a través de la jerarquía. */