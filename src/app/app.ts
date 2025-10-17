import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';
import { User } from './interfaces/user.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // per passare i dati degli users al componente figlio ho bisogno di accedere ai dati qui
  // users: { id: string; name: string; avatar: string }[] = DUMMY_USERS;
  users: User[] = DUMMY_USERS;

  // selectedUser: { id: string; name: string; avatar: string } | undefined;
  selectedUser: User | undefined;

  // onSelectEvent(user: { id: string; name: string; avatar: string }) {
  onSelectEvent(user: User) {
    console.log(user);
    this.selectedUser = user;
  }

  trackByUserId(index: number, user: User): string {
    return user.id ?? '';
  }
}
