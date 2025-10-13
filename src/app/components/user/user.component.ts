import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // con l'implementazione dei signals (da ng16 e resi stabili da ng17) da parte di angular c'è la volontà di non utilizzare più zone.js per la change detection
  // un signal è un container con un valore iniziale, quando cambia quello che c'è nel container vengono aggiornati tutti i punti dell'app dove quel container è utilizzato, è una funzione e così va utilizzata
  // selectedUser: { id: string; name: string; avatar: string } = DUMMY_USERS[randomIndex];
  selectedUser: WritableSignal<{ id: string; name: string; avatar: string }> = signal(
    DUMMY_USERS[randomIndex]
  );

  // creo un getter con la keyword get
  // una funzione che restituisce qualcosa e viene utilizzata nel template come una semplice proprietà, non va eseguita
  get imagePath(): string {
    // return `/assets/users/${this.selectedUser.avatar}`;
    return `/assets/users/${this.selectedUser().avatar}`;
  }

  // invece del get utilizzo le computed signals, funzioni che restituiscono qualcosa dipendentemente ad un signal che cambia
  // cambia lo user e viene ritornato il nuovo valore di avatar
  imagePathComputed: Signal<string> = computed(() => `/assets/users/${this.selectedUser().avatar}`);

  // questo metodo aggiorna la UI, cambia il valore di uno stored data, la property selectedUser
  // angular si accorge di questi cambiamenti tramite la libreria zone.js
  onSelectedUser(): void {
    const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
