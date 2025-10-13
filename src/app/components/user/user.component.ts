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

  // questo metodo aggiorna la UI, cambia il valore di uno stored data, la property selectedUser
  // angular si accorge di questi cambiamenti tramite la libreria zone.js
  onSelectedUser(): void {
    const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
