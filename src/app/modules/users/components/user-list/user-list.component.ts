import {
  Component,
  OnInit,
  Output,
  Input,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect(id: string) {
    this.selected.emit(id);
  }
}
