import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/common/models/TableSettings.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  @ViewChild('datatable') datatable: any;
  itemList: any[] = [];
  tblStx: TableSettings = new TableSettings();

  constructor() {
    this.itemList = require('../../../assets/users.json');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.datatable.columnMode = ColumnMode.force;
  }

}
