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
  // col ! convinco typescript che quell'input property riceverà un valore, se passo un oggetto di configurazione all'Input con la proprietà required true sarò costretto a passare un valore dal parent altrimenti avrò un errore. Senza questa opzione potrei non passare nulla
  @Input({ required: true }) avatar!: string;
  @Input() name!: string;

  get imagePath(): string {
    return `/assets/users/${this.avatar}`;
  }

  onSelectedUser(): void {}
}
