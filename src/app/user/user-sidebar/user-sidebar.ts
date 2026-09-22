import { Component, HostListener } from '@angular/core';
 import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user-sidebar.html',
  styleUrl: './user-sidebar.css',
})
export class UserSidebar {

  isCollapsed = false;

  isMobileOpen = false;


  // =========================
  // TOGGLE SIDEBAR
  // =========================

  toggleSidebar(): void {

    if (window.innerWidth <= 768) {

      this.isMobileOpen = !this.isMobileOpen;

    } else {

      this.isCollapsed = !this.isCollapsed;

    }

  }


  // =========================
  // CLOSE MOBILE SIDEBAR
  // =========================

  closeMobileSidebar(): void {

    if (window.innerWidth <= 768) {

      this.isMobileOpen = false;

    }

  }


  // =========================
  // LOGOUT
  // =========================

  logout(): void {

    localStorage.removeItem('token');

    // Add your logout API/service here later

    window.location.href = '/login';

  }


  // =========================
  // RESPONSIVE
  // =========================

  @HostListener('window:resize')
  onResize(): void {

    if (window.innerWidth > 768) {

      this.isMobileOpen = false;

    }

  }

}
