import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FertilizerRoutingModule } from './fertilizer-routing.module';
import { FertilizerComponent } from './fertilizer.component';
import { FstartComponent } from './components/fstart/fstart.component';
import { FRecommendComponent } from './components/f-recommend/f-recommend.component';
import { FResultComponent } from './components/f-result/f-result.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    FertilizerComponent,
    FstartComponent,
    FRecommendComponent,
    FResultComponent,

  ],
  imports: [
    CommonModule,
    FertilizerRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule
  ]
})
export class FertilizerModule { }
