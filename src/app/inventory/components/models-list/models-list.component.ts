import { Component, OnInit } from '@angular/core';
import { ModelsService } from 'src/app/shared/services/models.service';
import { Model } from 'src/app/shared/models/model.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
})
export class ModelsListComponent implements OnInit {
  models: Model[] = [];
  constructor(private modelsService: ModelsService, private location: Location) {}

  ngOnInit(): void {
    this.modelsService.getModels().subscribe((models: Model[]) => {
      this.models = models;
    });
  }

  goBack() {
    this.location.back();
  }
}
