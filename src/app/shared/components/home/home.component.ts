import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  open = true;
  constructor() {}
  ngOnInit(): void {}
  changeNavbar(status: boolean) {
    this.open = status;
  }
}
