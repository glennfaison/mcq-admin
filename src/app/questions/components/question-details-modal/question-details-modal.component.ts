import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';
import { CoreService } from 'src/app/core/services/core.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-question-details-modal',
  templateUrl: './question-details-modal.component.html',
  styleUrls: ['./question-details-modal.component.css']
})
export class QuestionDetailsModalComponent implements OnInit {

  @Input() selectedItem: Question;
  @Input() selectAction: 'view' | 'edit' | 'delete' | 'create';
  @Output() confirm: EventEmitter<Question> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  newOption: string;
  newOptionIsCorrect = false;

  constructor(
    private core: CoreService,
    private auth: AuthService,
    private toastSvc: ToastService,
  ) { }

  ngOnInit() { }

  toggleCorrectIndices(idx) {
    if (this.selectAction === 'view') { return; }
    const indexToToggleAt = this.selectedItem.correctOptionIndices.findIndex(i => i === idx);
    if (indexToToggleAt === -1) {
      this.selectedItem.correctOptionIndices = [...this.selectedItem.correctOptionIndices, idx];
    } else {
      this.selectedItem.correctOptionIndices.splice(indexToToggleAt, 1);
    }
  }

  addOption() {
    if (!this.selectedItem || !(this.selectedItem instanceof Question)) {
      this.selectedItem = new Question();
    }
    this.selectedItem.optionList = [...this.selectedItem.optionList, this.newOption];
    if (this.newOptionIsCorrect) {
      this.selectedItem.correctOptionIndices = [...this.selectedItem.correctOptionIndices, this.selectedItem.correctOptionIndices.length];
    }
    this.newOption = '';
    this.newOptionIsCorrect = false;
  }

  action() {
    if (!this.selectedItem.correctOptionIndices.length) {
      this.toastSvc.error('You cannot submit a question without at least one correct option');
      return;
    }
    this.confirm.emit(this.selectedItem);
  }

  close() {
    this.cancel.emit();
  }

}
