import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>Counter : {{ counter }}</p>

    <button (click)="counter = counter + 1">Plus Click</button>
    <button (click)="counter = counter - 1">Minus Click</button>
    <br />
    <button (mouseover)="counter = counter + 1">Plus Over</button>
    <button (mouseover)="counter = counter - 1">Minus Over</button>
    <br />
    <label for="plusText">Testo Plus Down</label>
    <input
      (keydown)="counter = counter + 1"
      type="text"
      name="plusText"
      id="plusText"
    />
    <label for="minusText">Testo Minus Down</label>
    <input
      (keydown)="counter = counter - 1"
      type="text"
      name="minusText"
      id="minusText"
    />
    <br />
    <label for="plusText">Testo Plus Up</label>
    <input
      (keyup)="counter = counter + 1"
      type="text"
      name="plusText"
      id="plusText"
    />
    <label for="minusText">Testo Minus Up</label>
    <input
      (keyup)="counter = counter - 1"
      type="text"
      name="minusText"
      id="minusText"
    />

    <!-- property binding -->

    <a [href]="link">Google.com</a>
    <img [src]="imgUrl" alt="" />

    <router-outlet />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title =
    /* (document.getElementById('plusText') as HTMLInputElement).value || */
    'first-project-angular';
  counter = 0;
  link = 'https://www.google.com';
  imgUrl =
    'https://th.bing.com/th/id/OIP.CkvQxlvUO1XWC_G8cwrttgHaDr?w=291&h=173&c=7&r=0&o=5&dpr=1.3&pid=1.7';

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
