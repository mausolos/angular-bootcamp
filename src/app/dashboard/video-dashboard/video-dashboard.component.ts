import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VideoDataService } from '../../video-data.service';
import { VideoData } from '../../../assets/video-data';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  videoList: Observable<VideoData[]>;

  currentVideo: VideoData;

  constructor(private videoService: VideoDataService) {}

  ngOnInit(): void {
    this.videoList = this.videoService.getVideoData();
  }

  currentVideoSelected(video: VideoData): void {
    this.currentVideo = video;
  }

}
