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
            <li class="list-group-item"
              *ngFor="let user of users"
              (click)="selectUser(user)"
              [class.active]="user === activeUser">
              {{ user.name  }} {{ user.username }}
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-8">
        <div class="jumbotron" *ngIf="activeUser">
          <h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>
        </div>
        <div class="jumbotron" *ngIf="!activeUser">
          <span class="glyphicon glyphicon-hand-left"></span>
          <h3>Choose a User</h3>
        </div>

      </div>

      </main>
      <footer class="text-center">
        Copyright <a href="https://rustybear.com">Rustybear</a> &copy;2017
      </footer>
    `,
    styles: [`
        .users-list li {
          cursor: pointer;
        }
        .jumbotron .glyphicon {
          font-size: 80px;
        }
    `]
})

export class AppComponent {
    users = [
        {id: 22, name: 'Kevin', username: 'kcoyner'},
        {id: 23, name: 'Bruce', username: 'bruce'},
    ]
    activeUser;
    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}


