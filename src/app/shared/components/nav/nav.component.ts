import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  @Output() navbarChanges: EventEmitter<boolean> = new EventEmitter();
  open = true;
  rol: string;
  userData: any;

  ngOnInit(): void {
    setTimeout(() => {
      const name = localStorage.getItem('name');
      const posName = localStorage.getItem('posName');
      const jobName = localStorage.getItem('jobName');
      const jobId = localStorage.getItem('jobId');
      this.rol = jobId;
      this.userData = {
        name,
        posName,
        jobName,
        jobId,
      };
    }, 500);
  }
  toggleSidebar() {
    this.open = !this.open;
    this.navbarChanges.emit(this.open);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
