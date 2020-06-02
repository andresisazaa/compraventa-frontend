import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/core/services/machines.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html'
})
export class MachinesComponent implements OnInit {
  machines = [];
  constructor(private machinesService: MachinesService) { }

  ngOnInit(): void {
    this.machinesService.getMachines().subscribe((machines) => {
      this.machines = machines;
    });
  }
}
