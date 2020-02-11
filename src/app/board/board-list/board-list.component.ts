import { Component, OnInit } from '@angular/core';
import { BoardDate, BoardItem } from "./board-list.model"
import { format, startOfWeek, addDays, isPast, isToday, isFuture, getDayOfYear, getYear } from 'date-fns'
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  boardStructure: BoardItem[] = [];
  loading: boolean = true;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  async ngOnInit(): Promise<void> {
    const user = await this.afAuth.auth.currentUser
    const isLoggedIn = !!user
    if (!isLoggedIn) {
      this.router.navigateByUrl("/")
    }

    const today = new Date()
    const startOfTheWeek = startOfWeek(today, {
      weekStartsOn: 1
    })

    for (let i = 0; i < 5; i++) {
      const date = addDays(startOfTheWeek, i);
      this.boardStructure.push({
        dayIdx: getDayOfYear(date),
        dayYear: getYear(date),
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
