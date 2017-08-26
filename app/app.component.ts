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
      <main>

      <div class="col-sm-4">
        <div *ngIf="users">
          <ul class="list-group users-list">
            <li class="list-group-item" *ngFor="let user of users">
              {{ user.name  }} {{ user.username }}
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-8">
        <div class="jumbotron">
          <h1>Welcome to GFD</h1>
          <p> {{ message }} </p>
        </div>
      </div>

      </main>
      <footer class="text-center">
        Copyright <a href="https://rustybear.com">Rustybear</a> &copy;2017
      </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
        `]
})

export class AppComponent {
    message = 'Hello!';
    users = [
        {id: 22, name: 'Kevin', username: 'kcoyner'},
        {id: 23, name: 'Bruce', username: 'bruce'},
    ]
}


