import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvidersService } from 'src/app/core/services/providers.service';
import { Provider } from 'src/app/shared/models/provider.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  provider: Provider;
  providerId: number;

  constructor(private route: ActivatedRoute, 
    private providerService: ProvidersService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.providerId = id;
      this.providerService.getProviderById(id).subscribe(provider => {
        this.provider = provider;
      }, err => {
        this.router.navigateByUrl('/proveedores');
      })
    });
  }

  updateProvider (provider: Provider): void {
    
    const providerData: Provider = {
      id: this.providerId,
      ...provider
    };
  
    this.providerService.updateProviderById(providerData).subscribe(message => {
      Swal.fire({
        icon: 'success',
        title: 'Proveedor actualizado con éxito',
        text: message,
        onClose: () => {this.router.navigateByUrl('/proveedores')}
      });

    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'No se puede actualizar el proveedor',
        text: err.message
      });
    });
  }

}
