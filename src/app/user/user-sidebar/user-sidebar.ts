import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user-sidebar.html',
  styleUrl: './user-sidebar.css',
})
export class UserSidebar {

  isCollapsed = false;

  @Input() isMobileOpen = false;

  @Output() closeSidebar = new EventEmitter<void>();


  // =========================
  // DESKTOP COLLAPSE
  // =========================

  toggleSidebar(): void {

    if (window.innerWidth > 768) {
      this.isCollapsed = !this.isCollapsed;
    }

  }


  // =========================
  // CLOSE MOBILE SIDEBAR
  // =========================

  closeMobileSidebar(): void {

    if (window.innerWidth <= 768) {
      this.closeSidebar.emit();
    }

  }


  // =========================
  // LOGOUT
  // =========================

  logout(): void {

    localStorage.removeItem('token');

    window.location.href = '/login';

  }


  // =========================
  // RESPONSIVE
  // =========================

  @HostListener('window:resize')
  onResize(): void {

    if (window.innerWidth > 768) {
      this.closeSidebar.emit();
    }

  }

}
