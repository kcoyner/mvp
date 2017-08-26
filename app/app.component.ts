import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">GFD App</a>
        </div>
      </nav>
      </header>

      <div class="jumbotron">
        <h1>Welcome to GFD</h1>
      </div>

      <footer class="text-center">
        Copyright &copy; 2017
      </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
        `]
})

export class AppComponent {}


