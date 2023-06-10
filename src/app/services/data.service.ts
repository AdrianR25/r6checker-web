import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../interfaces/search';
import { Check } from '../interfaces/check';
import ProfilePicturesIndex from '../../assets/demo-data/profile-pictures/index.json';
import RandomUsernames from '../../assets/demo-data/usernames.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // ORIGINAL CODE //
  /* 
  apiUrl = 'https://r6checker.herokuapp.com/';
  //apiUrl = 'http://localhost:8000/';
  searchApiVersion = 'v1/';
  checkApiVersion = 'v2/';

  getSearch(platform: string, username: string){
    var requestUrl: string = this.apiUrl + this.searchApiVersion + 'search/?platform=' + platform + '&username=' + username;
    return this.http.get<Search>(requestUrl);
  }

  getCheck(playerId: string){
    var requestUrl: string = this.apiUrl + this.checkApiVersion + 'check/?playerId=' + playerId;
    return this.http.get<Check>(requestUrl);
  }

  refreshProfile(playerId: string){
    var refreshUrl: string =  'https://r6tab.com/mainpage.php?page=' + playerId + '&updatenow=true';
    var returnData = this.http.head(refreshUrl);
    console.log(returnData);
    return returnData;
  }
  */

  getSearch(platform: string, username: string): Search {
    let result: Search = {
      totalResults: 10,
      searchResults: []
    };

    result.searchResults.push(
      {
        username: username,
        playerId: username,
        profilePic: this.getRandomProfilePicUrl()
      }
    )

    for (let index = 0; index < 10; index++) {
      const randomUsername = RandomUsernames[Math.floor(Math.random() * RandomUsernames.length)];
      result.searchResults.push(
        {
          username: randomUsername,
          playerId: randomUsername,
          profilePic: this.getRandomProfilePicUrl()
        }
      )
    }

    return result;
  }

  getCheck(playerId: string): Check {
    return {
      error: false,
      checkResults: {
        username: playerId,
        profilePic: this.getRandomProfilePicUrl(),
        playerLevel: Math.floor(Math.random() * 400),
        cheatRating: Math.floor(Math.random() * 100),
        rankedWinrate: Math.round(Math.random() * 100) / 100,
        rankedPlaytime: Math.floor(Math.random() * 24),
        rankedKillrate: Math.round(Math.random() * 100) / 100,
        currentMmr: Math.floor(Math.random() * 5000),
        currentRank: Math.ceil(Math.random() * 20),
        season16Rank: Math.floor(Math.random() * 20),
        season15Rank: Math.floor(Math.random() * 20),
      }
    }
  }

  refreshProfile() { }

  private getRandomProfilePicUrl(): string {
    return `./assets/demo-data/profile-pictures/${ProfilePicturesIndex[Math.floor(Math.random() * ProfilePicturesIndex.length)].id}.webp`;
  }

}
