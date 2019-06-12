import { Injectable } from '@angular/core';
import { TableSettings } from '../models/TableSettings.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  defaultTableSettings: TableSettings = new TableSettings();

  constructor() { }
}
