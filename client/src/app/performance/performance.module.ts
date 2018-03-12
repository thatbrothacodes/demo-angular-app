import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceComponent } from './performance.component';
import { routes } from './performance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerformanceComponent]
})
export class PerformanceModule { }
