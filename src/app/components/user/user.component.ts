import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  InputSignal,
  output,
  Output,
  OutputEmitterRef,
  Signal,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // l'Input decorator può essere sostituito dal più moderno input() signal
  // un InputSignal è readonly quindi non si possono utilizzare metodi come set o update
  @Input({ required: true }) avatar!: string;
  @Input() name!: string;
  @Input({ required: true }) id!: string;

  // il decoratore @Output permette di istanziare un EmitterObject che consente di creare un evento customizzato da un component children che può essere ascoltato da un suo parent component
  @Output() select: EventEmitter<{ id: string; name: string; avatar: string }> = new EventEmitter();
  // stessa cosa con la funzione output(), fa la stessa cosa perchè non crea un signal ma mi permette di creare un EventEmitter senza il decoratore @Output
  // select: OutputEmitterRef<string> = output();

  // avatar = input<string>();
  // avatar: InputSignal<string> = input.required();
  // name: InputSignal<string> = input.required();

  get imagePath(): string {
    return `/assets/users/${this.avatar}`;
  }
  // dato che le properties sono InputSignal posso utilizzare una computed signal per restituire la src delle immagini
  // imagePath: Signal<string> = computed(() => `/assets/users/${this.avatar()}`);

  onSelectedUser(): void {
    // in questo metodo richiamo l'emitter select e gli faccio emettere l'id dello user
    this.select.emit({
      id: this.id,
      name: this.name,
      avatar: this.avatar,
    });
  }
}
