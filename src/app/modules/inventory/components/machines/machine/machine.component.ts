import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MachinesService } from 'src/app/core/services/machines.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
})
export class MachineComponent implements OnInit {
  machine: any;
  machineForm: FormGroup;
  openModal: boolean;
  constructor(
    private route: ActivatedRoute,
    private machinesService: MachinesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params.id);
      this.machinesService.getMachineById(id).subscribe((machine) => {
        this.machine = machine;
        this.machineForm = this.createMachineForm();
      });
    });
  }

  createMachineForm(): FormGroup {
    return this.fb.group({
      saleValue: [null, Validators.required],
    });
  }

  submit() {
    if (this.machineForm.invalid) {
      return;
    }
    const machine = {
      id: this.machine.id,
      status: 2,
      machineData: {
        saleValue: this.machineForm.value.saleValue,
      },
    };
    this.onCloseModal();
    this.machinesService.updateMachineById(machine).subscribe(
      (message) => {
        Swal.fire({
          icon: 'success',
          title: '¡Registro actualizado!',
          text: message,
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: '¡Ocurrió un error!',
          text: error.error.message,
        });
      },
      () => {
        this.machinesService.getMachineById(machine.id).subscribe((m) => {
          this.machine = m;
        });
      }
    );
  }

  isAdquirida(): boolean {
    return (
      this.machine.statuses.length === 1 &&
      this.machine.statuses[0].name === 'Adquirida'
    );
  }

  onCloseModal(): void {
    this.openModal = false;
  }

  onOpenModal(): void {
    this.openModal = true;
  }
}
