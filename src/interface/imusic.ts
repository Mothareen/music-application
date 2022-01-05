import { environment } from "src/environments/environment";



export const MusicAppApiPath = {
    // Auth
    // login: `${environment.nextApiUrl}/method/roona.api.auth.app.login`,
    TopArtists: `${environment.nextApiUrl}/2.0/?method=tag.gettopartists&tag=disco&api_key=${environment.Api_key}&format=json`,
   
  };