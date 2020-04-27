import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/shared/services/machines.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.scss'],
})
export class MachinesListComponent implements OnInit {
  machines = [];
  loadingMachines: boolean;
  constructor(
    private machinesService: MachinesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMachines();
  }

  getMachines(): void {
    this.loadingMachines = true;
    this.machinesService.getMachines().subscribe((machines) => {
      this.machines = machines;
      this.loadingMachines = false;
    });
  }

  viewMachineDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
