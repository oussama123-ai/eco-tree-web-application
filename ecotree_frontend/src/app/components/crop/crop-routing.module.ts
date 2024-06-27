import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropComponent } from './crop.component';

const routes: Routes = [{ path: '', component: CropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropRoutingModule { }
