import { Component, OnInit, Input } from '@angular/core';
import { BoardItem } from '../board-list/board-list.model';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {

  @Input() boardItem: BoardItem;

  constructor() { }

  ngOnInit(): void {
  }

  get weekday() {
    return this.boardItem.boardDate.day
  }

  get date() {
    return this.boardItem.boardDate.date
  }

  get isCurrent() {
    return this.boardItem.boardDate.current
  }

  get isPast() {
    return this.boardItem.boardDate.past
  }

  get isFuture() {
    return this.boardItem.boardDate.future
  }
}
