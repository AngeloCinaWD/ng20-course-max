import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // passo i dati al componente dall'esterno, dal componente padre
  // creo proprietà con il decorator @Input
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(): string {
    return `/assets/users/${this.avatar}`;
  }

  onSelectedUser(): void {}
}
