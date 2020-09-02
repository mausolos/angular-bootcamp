import { Component, OnInit } from '@angular/core';
import { videoData, VideoData } from '../../../assets/video-data';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  videoList = videoData;

  currentVideo: VideoData;

  constructor() { }

  ngOnInit(): void {
  }

  currentVideoSelected(video: VideoData): void {
    this.currentVideo = video;
  }

}
