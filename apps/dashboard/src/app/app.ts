import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
@Component({
  imports: [ RouterModule, NxWelcome,SelectButtonModule, FormsModule ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
   stateOptions: any[] =[];
    value: string = 'dashbaord';
  protected title = 'dashboard';
}
