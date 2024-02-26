import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../components/admin-panel/admin-panel.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: MainComponent },
  {path: 'admin', component:AdminPanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
