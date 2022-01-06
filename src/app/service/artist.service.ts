import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MusicAppApiPath } from 'src/interface/imusic';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getTopArtist(){
    return this.http.get<any>(`${MusicAppApiPath.TopArtists}`).pipe(map((data) => data));
  }
}
