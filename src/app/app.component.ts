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

    <router-outlet />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-project-angular';
  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
