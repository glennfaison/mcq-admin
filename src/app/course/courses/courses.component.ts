import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/common/models/TableSettings.model';
import { CoreService } from 'src/app/common/services/core.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  @ViewChild('datatable') datatable: any;
  itemList: any[] = [];
  tblStx: TableSettings = new TableSettings();
  searchFilter: string = '';

  constructor(private core: CoreService) {
    this.tblStx = this.core.defaultTableSettings;
    this.itemList = require('../../../assets/employees.json');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.datatable.columnMode = ColumnMode.force;
  }

}
