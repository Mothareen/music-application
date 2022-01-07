import { Component, OnInit } from '@angular/core';
import { Country } from 'src/models/Country';
import { ArtistInfo } from 'src/models/GetInfo';
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
  public ArtistInfo: ArtistInfo = new ArtistInfo();
  public selectedCountry : String = "Spain";
  public Countries: Country[] =[];

  constructor(private artistService: ArtistService,) { 
    this.GetCountry();
  }
  public selectedValue!: string;
  public selectedCar!: string;
  public artistname!: String;
 


  ngOnInit(): void {
    this.ArtistDetail();

  }
  async ArtistDetail() {
    this.artistService.getGeoArtist(this.selectedCountry).subscribe
      (async (data) => {
        console.log(data);
        this.topArtist = data;
        console.log(this.topArtist);
        this.Artists = this.topArtist.topartists.artist;
        console.log("attribute");
        console.log(this.topArtist.topartists['@attr']);
        // this.topArtist.topartists.artist.
      },
        async (error) => {
          console.log('error', error);
        }
      );
    
  }

  async GetCountry() {
    this.artistService.getCountry().subscribe
      (async (data) => {
        
        this.Countries = data;
        console.log(this.Countries);
        
      },
        async (error) => {
          console.log('error', error);
        }
      );
    
  }


  async GetArtistInfo(name: String) {
    this.artistService.getArtistInfo(name).subscribe
      (async (data) => {
        console.log(data);
        console.log("getArtistInfo()");
        this.ArtistInfo = data;
        
        // this.topArtist.topartists.artist.
      },
        async (error) => {
          console.log('error', error);
        }
      );
    
  }
  getArtistImg(img: Image)
      {
        return img['#text'];
      }
getRank(artist : Artist){
      return artist['@attr'].rank;
}
  
}
