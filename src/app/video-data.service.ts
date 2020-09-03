import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoData } from '../assets/video-data';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private httpClient: HttpClient) {
  }

  getVideoData(): Observable<VideoData[]> {
    return this.httpClient.get<VideoData[]>(
      'https://api.angularbootcamp.com/videos'
    );
  }
}
