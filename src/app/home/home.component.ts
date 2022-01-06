import { Component, OnInit } from '@angular/core';
import { Artist, ArtistAttr, Image, TopArtistName, Topartists } from 'src/models/TopArtist';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public topArtist: TopArtistName = new TopArtistName();
  public Artists: Artist[] = [];
  public Attr : ArtistAttr[] = []; 
  public img : Image[] = [];
  constructor(private artistService: ArtistService,) { }

  ngOnInit(): void {
    this.ArtistDetail();
  }
  async ArtistDetail() {
    this.artistService.getTopArtist().subscribe
      (async (data) => {
        console.log(data);
        this.topArtist = data;
        this.Artists = this.topArtist.topartists.artist;
      
      },
        async (error) => {
          console.log('error', error);
        }
      );
  }


  
}
