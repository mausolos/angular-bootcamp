import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';

const dashboardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent },
  { path: 'video-list', component: VideoListComponent  },
  { path: 'video-player', component: VideoPlayerComponent },
  { path: 'stat-filters', component: StatFiltersComponent }
];

@NgModule({
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
