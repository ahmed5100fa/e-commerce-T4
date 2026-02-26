import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthLibraryService } from '@org/auth';

@Component({
  selector: 'app-dropdown-content',
  imports: [RouterLink],
  templateUrl: './dropdown-content.html',
  styleUrl: './dropdown-content.css',
})
export class DropdownContent {
    private AuthService = inject(AuthLibraryService)

    logout() {
    this.AuthService.logout().subscribe({
      next : () => {
        localStorage.removeItem('token');
      }
    })
  }
}
