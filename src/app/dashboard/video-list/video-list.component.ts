import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  @Input() videos;

  selectedVideo;

  selectVideo(video): void {
    this.selectedVideo = video;

  } // end selectVideo

}
