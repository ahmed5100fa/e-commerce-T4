import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthLibraryService } from '@org/auth';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
  import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Heart, LucideAngularModule , ShoppingCart , Bell, User , ChevronDown ,MapPinPen , Search, Menu, MapPinHouse, ScrollText, Settings, LogOut} from 'lucide-angular';

@Component({
  selector: 'app-dropdown-content',
  imports: [RouterLink , ButtonModule, MenuModule , LucideAngularModule],
  templateUrl: './dropdown-content.html',
  styleUrl: './dropdown-content.css',
})
export class DropdownContent {
  private authService = inject(AuthLibraryService);
  private router = inject(Router);
  userFirstName = 'Joseph';
  userLastName = 'McFall';
  icons = [MapPinHouse , ScrollText , Settings , LogOut];

menuItems: any = [
    {
    label: 'My Profile',
    icon: User,
    command: () => this.router.navigate(['/profile']),
    styleClass: 'flex items-center gap-3 p-2 hover:text-sidebar-link-hover rounded-lg cursor-pointer',
    style: { textDecoration: 'none' }
  },
  {
    label: 'My Addresses',
    icon: MapPinHouse,
    command: () => this.router.navigate(['/addresses']),
    styleClass: 'flex items-center gap-3 p-2 rounded-lg cursor-pointer'
  },
  {
    label: 'My Orders',
    icon: ShoppingCart,
    command: () => this.router.navigate(['/orders']),
    styleClass: 'flex items-center gap-3 p-2 rounded-lg cursor-pointer'
  },
  {
    label: 'Dashboard',
    icon: Settings,
    command: () => this.router.navigate(['/dashboard']),
    styleClass: 'flex items-center gap-3 p-2 rounded-lg cursor-pointer'
  },
  { separator: true, styleClass: 'mt-2 pt-2 border-t border-gray-200' },
  {
  label: 'Log out',
  icon: LogOut,
  styleClass: 'flex items-center gap-3 p-2 rounded-lg cursor-pointer text-red-500',
  command: () => {
    console.log('logout clicked');
    this.logout();
  }
}
];

  logout() {

  this.authService.logout().subscribe({
    next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }});
}

}
