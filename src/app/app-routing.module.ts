import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'blackjack', loadChildren: './blackjack/blackjack.module#BlackjackModule' },
    { path: 'performance', loadChildren: './performance/performance.module#PerformanceModule' },
    { path: '', loadChildren: './demos/demos.module#DemosModule' }
];
