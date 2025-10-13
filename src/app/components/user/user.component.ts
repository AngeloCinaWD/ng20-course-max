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
  // selectedUser: WritableSignal<{ id: string; name: string; avatar: string }> = signal(
  //   DUMMY_USERS[randomIndex]
  // );
  // imagePathComputed: Signal<string> = computed(() => `/assets/users/${this.selectedUser().avatar}`);
  // onSelectedUser(): void {
  //   const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
