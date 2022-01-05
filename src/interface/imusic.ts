import { environment } from "src/environments/environment";



export const MusicAppApiPath = {
    // Auth
    
    TopArtists: `${environment.MusictApiUrl}/2.0/?method=tag.gettopartists&tag=disco&api_key=${environment.Api_key}&format=json`,
   
  };