import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthLibraryService } from '@org/auth';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-second-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule], // لازم
  templateUrl: './second-nav.html',
  styleUrls: ['./second-nav.css'],
})
export class SecondNav {
    private authService = inject(AuthLibraryService);
    router = inject(Router);

  logout() {

  this.authService.logout().subscribe({
    next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }});
}
}
