import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { SecondNav } from "./components/second-nav/second-nav";
import { Sidebar } from "./components/sidebar/sidebar";
import { RouterLink } from "@angular/router";
import { AuthLibraryService } from '@org/auth';
import { DropdownContent } from "./components/dropdown-content/dropdown-content";
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, SecondNav, Sidebar, RouterLink, DropdownContent , ToggleSwitchModule, FormsModule],
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
