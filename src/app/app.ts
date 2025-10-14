import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // per passare i dati degli users al componente figlio ho bisogno di accedere ai dati qui
  users: { id: string; name: string; avatar: string }[] = DUMMY_USERS;

  selectedUser: { id: string; name: string; avatar: string } = this.users[0];

  onSelectEvent(user: { id: string; name: string; avatar: string }) {
    console.log(user);
    this.selectedUser = user;
  }
}
