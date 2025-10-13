import { Component, computed, input, Input, InputSignal, Signal } from '@angular/core';

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

  // avatar = input<string>();
  // avatar: InputSignal<string> = input.required();
  // name: InputSignal<string> = input.required();

  get imagePath(): string {
    return `/assets/users/${this.avatar}`;
  }
  // dato che le properties sono InputSignal posso utilizzare una computed signal per restituire la src delle immagini
  // imagePath: Signal<string> = computed(() => `/assets/users/${this.avatar()}`);

  onSelectedUser(): void {}
}
