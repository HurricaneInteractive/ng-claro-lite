import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BoardItem, BoardData } from '../board-list/board-list.model';
import { BoardService } from '../board.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit, OnDestroy {

  @Input() boardItem: BoardItem;
  boardData: BoardData[];
  sub: Subscription;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.sub = this.boardService.getBoardData(this.boardItem.dayYear, this.boardItem.dayIdx)
      .subscribe(board => (
        this.boardData = board
      ))
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
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
