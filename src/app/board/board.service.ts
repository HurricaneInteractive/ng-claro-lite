import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { BoardItem, BoardData } from './board-list/board-list.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  getBoardData(year: number, day: number) {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        console.log(user.uid)
        if (user) {
          return this.db
            .collection<BoardData[]>(`lists/${user.uid}/${day}-${year}`)
            .valueChanges({
              idField: 'id'
            })
        } else {
          return []
        }
      })
    )
  }
}
