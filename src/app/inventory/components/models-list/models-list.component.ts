import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/shared/services/models.service';
import { Model } from 'src/app/shared/models/model.model';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
})
export class ModelsListComponent implements OnInit {
  loadingModels: boolean;
  models: Model[] = [];
  constructor(private modelsService: ModelsService) {}

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
