import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/shared/models/model.model';
import { ModelsService } from 'src/app/core/services/models.service';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html'
})
export class ModelsListComponent implements OnInit {
  loadingModels: boolean;
  models: Model[] = [];
  constructor(private modelsService: ModelsService) { }

  ngOnInit(): void {
    this.getModels();
  }

  getModels() {
    this.loadingModels = true;
    this.modelsService.getModels().subscribe((models: Model[]) => {
      this.models = models;
      this.loadingModels = false;
    });
  }
}
