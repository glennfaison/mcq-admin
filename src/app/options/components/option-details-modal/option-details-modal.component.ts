import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/core/models/Option.model';

@Component({
  selector: 'app-option-details-modal',
  templateUrl: './option-details-modal.component.html',
  styleUrls: ['./option-details-modal.component.css']
})
export class OptionDetailsModalComponent implements OnInit {

  @Input() selectedItem: Option;
  @Input() selectAction: 'view' | 'edit' | 'delete';
  @Output() confirm: EventEmitter<Option> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.confirm.emit(this.selectedItem);
  }

  close() {
    this.cancel.emit();
  }

}
