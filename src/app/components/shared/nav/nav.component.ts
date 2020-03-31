import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  open: boolean = true;
  @Output() onSidebarChanges: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void { }
  toggleSidebar() {
    this.open = !this.open;
    this.onSidebarChanges.emit(this.open);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
