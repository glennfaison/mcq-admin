import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/core/models/TableSettings.model';
import { Topic } from 'src/app/core/models/Topic.model';
import { CoreService } from 'src/app/core/services/core.service';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit, AfterViewChecked {

  @ViewChild('datatable') datatable: DatatableComponent;

  tblStx: TableSettings = new TableSettings();
  searchFilter: string = '';
  itemList: Topic[] = [];
  selectedItem: Topic;
  selectAction: 'view' | 'edit' | 'delete';

  constructor(
    private core: CoreService,
    private topicSvc: TopicService,
  ) {
    this.tblStx = this.core.defaultTableSettings;
    this.fetchTopics();
    this.itemList = require('../../../../assets/topics.json');
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.datatable.columnMode = ColumnMode.force;
  }

  async createTopic(item: Topic): Promise<void> {
    try {
      const newItem = await this.topicSvc.createTopic(item);
      this.itemList = [...this.itemList, newItem];
      this.fetchTopics();
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTopics(): Promise<void> {
    try {
      const res: Topic[] = await this.topicSvc.fetchTopics();
      if (!Array.isArray(res)) { throw res; }
      this.itemList = res || [];
    } catch (error) {
      console.log(error);
    }
  }

  async updateTopic(item: Topic): Promise<void> {
    try {
      const newItem = await this.topicSvc.updateTopic(item);
      this.fetchTopics();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTopic(id): Promise<void> {
    try {
      await this.topicSvc.deleteTopic(id);
    } catch (error) {
      console.log(error);
    }
  }

  selectOneItem(item: Topic, reason: 'view' | 'edit' | 'delete') {
    this.selectedItem = { ...item };
    this.selectAction = reason;
  }

  onModalConfirmed(item: Topic) {
    try {
      switch (this.selectAction) {
        case 'delete':
          this.deleteTopic(item._id);
          break;
        case 'edit':
          this.updateTopic(item);
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
