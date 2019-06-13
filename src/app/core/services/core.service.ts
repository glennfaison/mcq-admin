import { Injectable } from '@angular/core';
import { TableSettings } from '../models/TableSettings.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  defaultTableSettings: TableSettings = new TableSettings();
  thisUser: User;

  constructor() { }
}
