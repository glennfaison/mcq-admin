import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/core/models/TableSettings.model';
import { UserQuiz } from 'src/app/core/models/UserQuiz.model';
import { CoreService } from 'src/app/core/services/core.service';
import { UserQuizService } from 'src/app/core/services/user-quiz.service';

@Component({
  selector: 'app-quiz-history',
  templateUrl: './quiz-history.component.html',
  styleUrls: ['./quiz-history.component.css']
})
export class QuizHistoryComponent implements OnInit {

  @ViewChild('datatable') datatable: DatatableComponent;

  tblStx: TableSettings = new TableSettings();
  searchFilter = '';
  itemList: UserQuiz[] = [];
  selectedItem: UserQuiz;
  selectAction: 'view' | 'edit' | 'delete' | 'create';

  constructor(
    private core: CoreService,
    private userQuizSvc: UserQuizService,
  ) {
    this.tblStx = this.core.defaultTableSettings;
    this.fetchUserQuizzes();
  }

  ngOnInit() {
    this.datatable.columnMode = ColumnMode.force;
  }

  async createUserQuiz(item: UserQuiz): Promise<void> {
    try {
      const newItem = await this.userQuizSvc.createUserQuiz(item);
      this.itemList = [...this.itemList, newItem];
      this.fetchUserQuizzes();
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUserQuizzes(): Promise<void> {
    try {
      const res: UserQuiz[] = await this.userQuizSvc.fetchMyUserQuizzes();
      if (!Array.isArray(res)) { throw res; }
      this.itemList = res || [];
      console.log(this.itemList);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUserQuiz(item: UserQuiz): Promise<void> {
    try {
      const newItem = await this.userQuizSvc.updateUserQuiz(item);
      this.fetchUserQuizzes();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUserQuiz(id): Promise<void> {
    try {
      await this.userQuizSvc.deleteUserQuiz(id);
      this.fetchUserQuizzes();
    } catch (error) {
      console.log(error);
    }
  }

  selectOneItem(item: UserQuiz, reason: 'view' | 'edit' | 'delete' | 'create') {
    this.selectedItem = { ...item };
    this.selectAction = reason;
  }

  onModalConfirmed(item: UserQuiz) {
    try {
      switch (this.selectAction) {
        case 'delete':
          this.deleteUserQuiz(item._id);
          break;
        case 'edit':
          this.updateUserQuiz(item);
          break;
        case 'create':
          this.createUserQuiz(item);
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
