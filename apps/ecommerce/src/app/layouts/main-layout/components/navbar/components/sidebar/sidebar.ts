import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { DropdownContent } from "../dropdown-content/dropdown-content";
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
@Component({
  selector: 'app-sidebar',
  imports: [DropdownContent, RouterLink , ToggleSwitchModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
    @Input() isOpen = false;
    @Input() isAccountDropdownOpen = false;
    @Output() closeSidebar = new EventEmitter<void>();
    @Output() toggleAccountDropdown = new EventEmitter<void>();
    isLoggedIn = signal<boolean>(false);
    checked = signal(true); // true = dark, false = light


    ngOnInit() {
      this.checkLoginStatus();

      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme ? savedTheme === 'dark' : true;

      this.checked.set(isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }

    checkLoginStatus() {
      this.isLoggedIn.set(!!localStorage.getItem('token'));
    }

  onClose() {
    this.closeSidebar.emit();
  }

  onToggleAccountDropdown() {
    this.toggleAccountDropdown.emit();
  }

  onThemeToggle(value: boolean) {
  this.checked.set(value);
  document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
  localStorage.setItem('theme', value ? 'dark' : 'light'); // حفظ في localStorage
}

}
