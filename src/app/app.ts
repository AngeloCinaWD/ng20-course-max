import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
