import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [BoardListComponent, BoardItemComponent, ListItemComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    DragDropModule
  ]
})
export class BoardModule { }
