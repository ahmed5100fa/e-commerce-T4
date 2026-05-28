import { Component, inject } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadCrumb.html',
  styleUrl: './breadCrumb.css',
})
export class BreadCrumb {
  private router = inject(Router);

  items: MenuItem[] = [];
  home: MenuItem = {
    icon: 'pi pi-home',
    routerLink: '/',
  };

  ngOnInit(): void {
    this.buildBreadcrumb();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.buildBreadcrumb();
      });
  }

  buildBreadcrumb(): void {
    const url = this.router.url;

    const segments = url.split('/').filter(Boolean);

    this.items = segments.map((segment, index) => ({
      label: this.capitalize(segment),
      routerLink: '/' + segments.slice(0, index + 1).join('/'),
    }));
  }

  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
