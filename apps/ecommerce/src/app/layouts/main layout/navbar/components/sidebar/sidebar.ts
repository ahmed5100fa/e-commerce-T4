import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { DropdownContent } from "../dropdown-content/dropdown-content";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [DropdownContent, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
    @Input() isOpen = false;
    @Input() isAccountDropdownOpen = false;
    @Output() closeSidebar = new EventEmitter<void>();
    @Output() toggleAccountDropdown = new EventEmitter<void>();
    isLoggedIn = signal<boolean>(true);

    // ngOnInit() {
    //   this.checkLoginStatus();
    // }

    // checkLoginStatus() {
    //   this.isLoggedIn.set(!!localStorage.getItem('token'));
    // }

  onClose() {
    this.closeSidebar.emit();
  }

  onToggleAccountDropdown() {
    this.toggleAccountDropdown.emit();
  }


}
