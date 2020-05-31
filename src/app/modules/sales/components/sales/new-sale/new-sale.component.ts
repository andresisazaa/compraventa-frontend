import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { CustomersService } from 'src/app/core/services/customers.service';
import { MachinesService } from 'src/app/core/services/machines.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { SalesService } from 'src/app/core/services/sales.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html'
})
export class NewSaleComponent implements OnInit {
  saleForm: FormGroup;
  machinesList: any[] = [];
  availableMachines: any[] = [];
  machines: FormArray;
  customers: Customer[] = [];
  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService,
    private machinesService: MachinesService,
    private salesService: SalesService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMachines();
    this.getCustomers();
    this.saleForm = this.createSaleForm();
  }

  getMachines(): void {
    this.machinesService.getAvailableMachines()
      .subscribe(machines => {
        this.machinesList = machines;
        this.availableMachines = this.machinesList.map(machine => ({
          machine,
          available: true
        }));
      });
  }

  getCustomers(): void {
    this.customersService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
      });
  }

  createSaleForm(): FormGroup {
    return this.fb.group({
      customerId: [null, Validators.required],
      machines: this.fb.array([this.createItem()]),
    });
  }

  get customer(): AbstractControl {
    return this.saleForm.get('customerId');
  }

  get machinesControls(): FormGroup {
    // tslint:disable-next-line: no-string-literal
    return this.saleForm.get('machines')['controls'] as FormGroup;
  }

  addItem(): void {
    this.machines = this.saleForm.get('machines') as FormArray;
    // this.availableMachines = this.availableMachines.filter(m =)
    this.machines.push(this.createItem());
  }

  removeItem(index: number): void {
    if (!this.machines || this.machines.length === 1) {
      return;
    }
    this.machines.removeAt(index);
  }

  createItem(): FormControl {
    return new FormControl(null, [Validators.required]);
  }

  submit(): void {
    if (this.saleForm.invalid) {
      return;
    }
    const { customerId, machines } = this.saleForm.value;
    const saleData = {
      customerId: Number(customerId),
      machinesId: machines.map((machine: string) => Number(machine))
    };
    this.salesService.createSale(saleData)
      .subscribe(sale => {
        Swal.fire({
          icon: 'success',
          title: '¡Venta exitosa!',
          text: `¡Venta con id ${sale.id} creada correctamente!`,
          onClose: () => { this.router.navigateByUrl('/ventas'); }
        });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: '¡Ocurrió un error!',
          text: `${error.error.message}`
        });
      });
  }

}
