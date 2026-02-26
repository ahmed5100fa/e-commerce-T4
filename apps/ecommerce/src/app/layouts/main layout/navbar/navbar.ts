import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { SecondNav } from "./components/second-nav/second-nav";
import { Sidebar } from "./components/sidebar/sidebar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, SecondNav, Sidebar, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  isLoggedIn = signal<boolean>(false);

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
  }

  checkLoginStatus() {
    this.isLoggedIn.set(!!localStorage.getItem('token'));
  }
}
