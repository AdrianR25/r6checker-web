import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../interfaces/search';
import { Check } from '../interfaces/check';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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

}
