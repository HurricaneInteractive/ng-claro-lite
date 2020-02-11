import { Component, OnInit } from '@angular/core';
import { BoardDate, BoardItem } from "./board-list.model"
import { format, startOfWeek, addDays, isPast, isToday, isFuture, getDayOfYear, getYear } from 'date-fns'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  boardStructure: BoardItem[] = [];
  boardData;
  loading: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const user = await this.authService.isLoggedIn()
    if (!user) {
      this.router.navigate([""])
    }

    const today = new Date()
    const startOfTheWeek = startOfWeek(today, {
      weekStartsOn: 1
    })

    for (let i = 0; i < 5; i++) {
      const date = addDays(startOfTheWeek, i);
      const dayIdx = getDayOfYear(date)
      const dayYear = getYear(date)

      this.boardStructure.push({
        dayIdx,
        dayYear,
        boardDate: this.getDateFormats(date)
      });
    }

    this.loading = false
  }

  getDateFormats(date: Date): BoardDate {
    return {
      day: format(date, 'ccc'),
      date: format(date, 'MMM d'),
      past: isPast(date) && !isToday(date),
      current: isToday(date),
      future: isFuture(date)
    }
  }

}
