import { Component, OnInit } from '@angular/core';
import { videoData } from '../../../assets/video-data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videos = videoData;

  selectedVideo;

  constructor() { }

  ngOnInit(): void {

  } // end ngOnInit

  selectVideo(video) {
    this.selectedVideo = video;

  } // end selectVideo

}
