import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent implements OnInit {
  @Input() user: User = {};
  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect(id: string) {
    this.selected.emit(id);
  }
}
