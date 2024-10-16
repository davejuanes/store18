import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    // No async
    // before render
    // COrre solo Una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and  during render
    // Correo varias veces
    console.log('ngOnChange');
    console.log('-'.repeat(10));
    console.log(changes);
  }
  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }
  ngAfterViewInit() {
    // after render
    // hijos del componente ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
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