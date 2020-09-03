import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VideoData } from '../assets/video-data';


const API = 'https://api.angularbootcamp.com/videos';
@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private httpClient: HttpClient) {}

  getVideoData(): Observable<VideoData[]> {
    return this.httpClient.get<VideoData[]>(API).pipe(
      tap((videoData) => console.log('videoData', videoData)),
      // map((videoData: VideoData[]) => {
      //   return videoData.filter((videoData) => {
      //     return videoData.author === 'Kyle Cordes';
      //   });
      // }),
      map((videoData: VideoData[]) => {
        return videoData.map((video) => {
          // The below is the longhand form of the object destructuring/spread ...
          // return {
          //   author: video.author.toUpperCase(),
          //   title: video.title,
          //   viewDetails: video.viewDetails,
          //   id: video.id
          // }
          return {
            ...video,
            author: video.author.toUpperCase(),
            title: 'Coming Soon!',
          };
        });
      })
    );
  }
}
