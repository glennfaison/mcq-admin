import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/core/models/TableSettings.model';
import { Question } from 'src/app/core/models/Question.model';
import { CoreService } from 'src/app/core/services/core.service';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, AfterViewChecked {

  @ViewChild('datatable') datatable: DatatableComponent;

  tblStx: TableSettings = new TableSettings();
  searchFilter: string = '';
  itemList: Question[] = [];
  selectedItem: Question;
  selectAction: 'view' | 'edit' | 'delete' | 'create';

  constructor(
    private core: CoreService,
    private questionSvc: QuestionService,
  ) {
    this.tblStx = this.core.defaultTableSettings;
    this.fetchQuestions();
    this.itemList = require('../../../../assets/questions.json');
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.datatable.columnMode = ColumnMode.force;
  }

  async createQuestion(item: Question): Promise<void> {
    try {
      const newItem = await this.questionSvc.createQuestion(item);
      this.itemList = [...this.itemList, newItem];
      this.fetchQuestions();
    } catch (error) {
      console.log(error);
    }
  }

  async fetchQuestions(): Promise<void> {
    try {
      const res: Question[] = await this.questionSvc.fetchQuestions();
      if (!Array.isArray(res)) { throw res; }
      this.itemList = res || [];
    } catch (error) {
      console.log(error);
    }
  }

  async updateQuestion(item: Question): Promise<void> {
    try {
      const newItem = await this.questionSvc.updateQuestion(item);
      this.fetchQuestions();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteQuestion(id): Promise<void> {
    try {
      await this.questionSvc.deleteQuestion(id);
      this.fetchQuestions();
    } catch (error) {
      console.log(error);
    }
  }

  selectOneItem(item: Question, reason: 'view' | 'edit' | 'delete' | 'create') {
    this.selectedItem = { ...item };
    this.selectAction = reason;
  }

  onModalConfirmed(item: Question) {
    try {
      switch (this.selectAction) {
        case 'delete':
          this.deleteQuestion(item._id);
          break;
        case 'edit':
          this.updateQuestion(item);
          break;
        case 'create':
          this.createQuestion(item);
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
