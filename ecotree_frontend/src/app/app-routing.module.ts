import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'fertilizer', loadChildren: () => import('./components/fertilizer/fertilizer.module').then(m => m.FertilizerModule) },
  { path: 'crop', loadChildren: () => import('./components/crop/crop.module').then(m => m.CropModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
