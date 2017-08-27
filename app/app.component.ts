import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    // TODO: change this to a reference from project root, not relative
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    users: User[] = [
        {id: 22, name: 'Kevin', username: 'kcoyner'},
        {id: 23, name: 'Bruce', username: 'bruce'},
    ]

    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}


