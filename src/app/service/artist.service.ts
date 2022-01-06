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
  getArtistInfo(artistname : String){
    return this.http.get<any>(`${MusicAppApiPath.ArtistInfo}${artistname}`).pipe(map((data) => data));
  }
  getGeoArtist(artistname : String){
    return this.http.get<any>(`${MusicAppApiPath.GeoTopArtists}${artistname}`).pipe(map((data) => data));
  }
}
