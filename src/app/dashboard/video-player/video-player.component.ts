import { Component, Input, OnInit } from '@angular/core';

import { VideoData } from '../../../assets/video-data';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: VideoData;

  constructor() { }

  ngOnInit(): void {
  }

}
