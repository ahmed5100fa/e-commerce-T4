import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-second-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './second-nav.html',
  styleUrl: './second-nav.css',
})
export class SecondNav {}
