import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './components/options/options.component';
import { OptionsRoutingModule } from './options-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OptionDetailsModalComponent } from './components/option-details-modal/option-details-modal.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    OptionsComponent,
    OptionDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    CoreModule,
  ],
  providers: []
})
export class OptionsModule { }
