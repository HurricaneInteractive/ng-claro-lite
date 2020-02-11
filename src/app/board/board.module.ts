import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [BoardListComponent, BoardItemComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class BoardModule { }
