import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser: { id: string; name: string; avatar: string } = DUMMY_USERS[randomIndex];

  // creo un getter con la keyword get
  // una funzione che restituisce qualcosa e viene utilizzata nel template come una semplice proprietà, non va eseguita
  get imagePath(): string {
    return `/assets/users/${this.selectedUser.avatar}`;
  }

  onSelectedUser(): void {
    const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
