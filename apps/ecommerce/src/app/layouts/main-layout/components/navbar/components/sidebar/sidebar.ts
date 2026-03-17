import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { DropdownContent } from "../dropdown-content/dropdown-content";
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { StoreUserData } from 'apps/ecommerce/src/app/core/services/cookies.service';
import { Heart, LucideAngularModule , ShoppingCart , Bell, User  , House , Gift , ClipboardList , PartyPopper ,Headset , Info, MapPinPen} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [DropdownContent, RouterLink, ToggleSwitchModule, FormsModule , LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() isOpen = false;
  @Input() isAccountDropdownOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() toggleAccountDropdown = new EventEmitter<void>();
  readonly icons = [Heart , ShoppingCart , Bell , User, House , Gift , ClipboardList , PartyPopper ,Headset , Info , MapPinPen];

  isLoggedIn = signal<boolean>(false);
  checked = signal(true);
  private readonly cookies = inject(StoreUserData);
  firstName = signal<string>('');
  lastName = signal<string>('');

  ngOnInit() {
    this.checkLoginStatus();

    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme ? savedTheme === 'dark' : true;
      this.checked.set(isDark);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

      const userData = this.cookies.getData('userData');
      this.firstName.set(userData?.firstName || '');
      this.lastName.set(userData?.lastName || '');
    }
  }

  checkLoginStatus() {
    if (typeof window !== 'undefined') {
      this.isLoggedIn.set(!!localStorage.getItem('token'));
    }
  }

  onClose() {
    this.closeSidebar.emit();
  }

  onToggleAccountDropdown() {
    this.toggleAccountDropdown.emit();
  }

  get themeChecked(): boolean {
    return this.checked();
  }

  set themeChecked(value: boolean) {
    this.checked.set(value);
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
      localStorage.setItem('theme', value ? 'dark' : 'light');
    }
  }
}
