import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/shared/services/machines.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
})
export class MachinesComponent implements OnInit {
  machines = [];
  constructor(private machinesService: MachinesService) {}

  ngOnInit(): void {
    this.machinesService.getMachines().subscribe((machines) => {
      this.machines = machines;
    });
  }
}
