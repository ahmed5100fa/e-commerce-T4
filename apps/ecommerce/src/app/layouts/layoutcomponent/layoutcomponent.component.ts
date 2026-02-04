import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layoutcomponent',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './layoutcomponent.component.html',
  styleUrl: './layoutcomponent.component.scss',
})
export class LayoutcomponentComponent {}

