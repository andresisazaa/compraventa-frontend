import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/core/services/providers.service';
import { Provider } from 'src/app/shared/models/provider.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html'
})
export class ProviderListComponent implements OnInit {
  providers: Provider[] = [];
  loadingProviders: boolean;

  constructor(
    private providerService: ProvidersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders(): void {
    this.loadingProviders = true;
    this.providerService.getProviders().subscribe(providers => {
      this.providers = providers;
      this.loadingProviders = false;
    }, err => {
      this.loadingProviders = false;
    });
  }

  viewProviderDetails(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
