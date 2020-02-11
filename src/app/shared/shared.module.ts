import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const components = [
  ShellComponent
]

const modules = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
