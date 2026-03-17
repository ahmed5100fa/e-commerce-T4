import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { SecondNav } from "./components/second-nav/second-nav";
import { Sidebar } from "./components/sidebar/sidebar";
import { RouterLink } from "@angular/router";
import { AuthLibraryService } from '@org/auth';
import { DropdownContent } from "./components/dropdown-content/dropdown-content";
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { StoreUserData } from 'apps/ecommerce/src/app/core/services/cookies.service';
import { Heart, LucideAngularModule , ShoppingCart , Bell, User , ChevronDown ,MapPinPen , Search, Menu} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, SecondNav, Sidebar, RouterLink, DropdownContent, ToggleSwitchModule, FormsModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  isLoggedIn = signal<boolean>(false);
  checked = signal(true);
  isSidebarOpen = signal(false);
  isAccountDropdownOpen = signal(false);
  isUserMenuOpen = signal(false);
  private readonly cookies = inject(StoreUserData);
  firstName = signal<string>('');
  lastName = signal<string>('');
    readonly icons = [Heart , ShoppingCart , Bell , User , ChevronDown , MapPinPen ,Search , Menu];



  onToggleSidebar() {
    this.isSidebarOpen.update(v => !v);
    this.toggleSidebar.emit();
  }

  toggleUserMenu() {
    this.isUserMenuOpen.update(v => !v);
  }

  toggleAccountDropdown() {
    this.isAccountDropdownOpen.update(v => !v);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
    this.isAccountDropdownOpen.set(false);
  }

  ngOnInit() {
    this.checkLoginStatus();
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme ? savedTheme === 'dark' : true;
      this.checked.set(isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      this.firstName.set(this.cookies.getData('userData')?.firstName || '');
      this.lastName.set(this.cookies.getData('userData')?.lastName || '');

    }
  }

  checkLoginStatus() {
    if (typeof window !== 'undefined') {
      this.isLoggedIn.set(!!localStorage.getItem('token'));
    }
  }

  onThemeToggle(value: boolean) {
    this.checked.set(value);
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
      localStorage.setItem('theme', value ? 'dark' : 'light');
    }
  }
}
