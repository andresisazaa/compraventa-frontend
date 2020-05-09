import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  open = true;
  constructor() {}
  ngOnInit(): void {}
  changeNavbar(status: boolean) {
    this.open = status;
  }
}
