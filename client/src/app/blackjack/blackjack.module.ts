import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BlackjackComponent } from './blackjack.component';
import { routes } from './blackjack-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlackjackComponent]
})
export class BlackjackModule { }
