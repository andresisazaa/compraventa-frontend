import { Component, OnInit, } from '@angular/core';
import { ProvidersService } from 'src/app/core/services/providers.service';
import { Provider } from 'src/app/shared/models/provider.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.scss']
})
export class NewProviderComponent implements OnInit {

  constructor(private providerService: ProvidersService, private router: Router) { }

  ngOnInit(): void {
  }

  createProvider(provider: Provider): void {
    this.providerService.createProvider(provider).subscribe(provider => {
      console.log(provider);
      Swal.fire({
        icon: 'success',
        title: 'Proveedor creado con éxito',
        text: `Proveedor con id número ${provider.id} creado exitosamente`,
        onClose: () => {this.router.navigateByUrl('/proveedores')}
      });
    },
      error => {
        console.log("No se pudo crear el proveedor");
        Swal.fire({
          icon: 'error',
          title: 'No se puede crear el proveedor',
          text: `${error.message}`
        });
      });
  }

}
