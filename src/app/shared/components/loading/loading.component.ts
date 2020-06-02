import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {
  @Input() loading?: boolean;
  constructor() { }

  ngOnInit(): void { }
}
