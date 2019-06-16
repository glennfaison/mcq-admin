import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/core/models/TableSettings.model';
import { Option } from 'src/app/core/models/Option.model';
import { CoreService } from 'src/app/core/services/core.service';
import { OptionService } from 'src/app/core/services/option.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, AfterViewInit {

  @ViewChild('datatable') datatable: DatatableComponent;

  tblStx: TableSettings = new TableSettings();
  searchFilter = '';
  itemList: Option[] = [];
  selectedItem: Option;
  selectAction: 'view' | 'edit' | 'delete' | 'create';

  constructor(
    private core: CoreService,
    private optionSvc: OptionService,
  ) {
    this.tblStx = this.core.defaultTableSettings;
    this.fetchOptions();
    this.itemList = require('../../../../assets/options.json');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.datatable.columnMode = ColumnMode.force;
  }

  async createOption(item: Option): Promise<void> {
    try {
      const newItem = await this.optionSvc.createOption(item);
      this.itemList = [...this.itemList, newItem];
      this.fetchOptions();
    } catch (error) {
      console.log(error);
    }
  }

  async fetchOptions(): Promise<void> {
    try {
      const res: Option[] = await this.optionSvc.fetchOptions();
      if (!Array.isArray(res)) { throw res; }
      this.itemList = res || [];
    } catch (error) {
      console.log(error);
    }
  }

  async updateOption(item: Option): Promise<void> {
    try {
      const newItem = await this.optionSvc.updateOption(item);
      this.fetchOptions();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOption(id): Promise<void> {
    try {
      await this.optionSvc.deleteOption(id);
      this.fetchOptions();
    } catch (error) {
      console.log(error);
    }
  }

  selectOneItem(item: Option, reason: 'view' | 'edit' | 'delete' | 'create') {
    this.selectedItem = { ...item };
    this.selectAction = reason;
  }

  onModalConfirmed(item: Option) {
    try {
      switch (this.selectAction) {
        case 'delete':
          this.deleteOption(item._id);
          break;
        case 'edit':
          this.updateOption(item);
          break;
        case 'create':
          this.createOption(item);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.clearModalData();
    }
  }

  clearModalData() {
    this.selectAction = null;
    this.selectedItem = null;
  }

}
