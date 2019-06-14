import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/core/models/Option.model';
import { CoreService } from 'src/app/core/services/core.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-option-details-modal',
  templateUrl: './option-details-modal.component.html',
  styleUrls: ['./option-details-modal.component.css']
})
export class OptionDetailsModalComponent implements OnInit {

  @Input() selectedItem: Option;
  @Input() selectAction: 'view' | 'edit' | 'delete' | 'create';
  @Output() confirm: EventEmitter<Option> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor(
    private core: CoreService,
    private auth: AuthService,
  ) {
    if (!this.selectedItem) { this.setOptionAuthor(); }
  }

  ngOnInit() {}

  async setOptionAuthor() {
    const item = new Option();
    const thisUser = this.core.thisUser ? this.core.thisUser : await this.auth.getThisUser();
    item.createdBy = thisUser._id;
    this.selectedItem = item;
  }

  action() {
    this.confirm.emit(this.selectedItem);
  }

  close() {
    this.cancel.emit();
  }

}
