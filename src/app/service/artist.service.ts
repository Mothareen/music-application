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
    const url = `${MusicAppApiPath.TopArtists}?so=${so}&dn=${dn}`;
    return this.http.get<any>(`${url}`).pipe(map((data) => data));
  }
}
