import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VideoData } from '../../../assets/video-data';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  videoList;

  currentVideo: VideoData;

  constructor(
    httpClient: HttpClient
  ) {
    httpClient
      .get('https://api.angularbootcamp.com/videos')
      .subscribe((videoList) => {
        this.videoList = videoList;
      });
  }

  ngOnInit(): void {
  }

  currentVideoSelected(video: VideoData): void {
    this.currentVideo = video;
  }

}
