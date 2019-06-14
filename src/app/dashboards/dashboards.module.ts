import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    CoreModule,
  ]
})
export class DashboardsModule { }
