import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // per passare i dati degli users al componente figlio ho bisogno di accedere ai dati qui
  users: { id: string; name: string; avatar: string }[] = DUMMY_USERS;
}
