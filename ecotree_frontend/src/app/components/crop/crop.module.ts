import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropRoutingModule } from './crop-routing.module';
import { CropComponent } from './crop.component';
import { CstartComponent } from './components/cstart/cstart.component';
import { CRecommendComponent } from './components/c-recommend/c-recommend.component';
import { CResultComponent } from './components/c-result/c-result.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CropComponent,
    CstartComponent,
    CRecommendComponent,
    CResultComponent
  ],
  imports: [
    CommonModule,
    CropRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class CropModule { }
