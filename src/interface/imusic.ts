import { environment } from "src/environments/environment";



export const MusicAppApiPath = {
    // Auth
    
    TopArtists: `${environment.MusictApiUrl}/2.0/?method=tag.gettopartists&tag=disco&limit=50&api_key=${environment.Api_key}&format=json`,
    ArtistInfo: `${environment.MusictApiUrl}/2.0/?method=artist.getinfo&api_key=${environment.Api_key}&format=json&artist=`,
    GeoTopArtists: `${environment.MusictApiUrl}/2.0/?method=geo.gettopartists&country=spain&limit=50&api_key=${environment.Api_key}&format=json`,

   
  };