import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Check } from 'src/app/interfaces/check';

@Component({
  selector: 'app-check-page',
  templateUrl: './check-page.component.html',
  styleUrls: ['./check-page.component.css']
})
export class CheckPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  checkResults: Check["checkResults"];
  rankedPlaytime: string;
  rankedWinrate: number;
  rankedKillrate: number;
  cheatrate: number;
  currentRankUrl: string;
  season16RankUrl: string;
  season15RankUrl: string;
  cheatSummary: string;

  error: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.dataService.refreshProfile(params.playerId);
      //console.log("The function han been called");
      this.checkPlayer(params.playerId);
    });
  }

  checkPlayer(playerId: string){
    this.checkResults = this.dataService.getCheck(playerId).checkResults;
    this.generateData();
  }

  generateData(){
    this.checkResults = this.checkResults;
    this.rankedPlaytime = this.checkResults.rankedPlaytime.toFixed(0);
    this.currentRankUrl = "https://r6tab.com/images/pngranks/" + this.checkResults["currentRank"] + ".png";
    this.season16RankUrl = "https://r6tab.com/images/pngranks/" + this.checkResults["season15Rank"] + ".png";
    this.season15RankUrl = "https://r6tab.com/images/pngranks/" + this.checkResults["season14Rank"] + ".png";
    if (this.checkResults["cheatRating"] >= 0 && this.checkResults["cheatRating"] <= 25){
      this.cheatSummary = "It doesn't look like this player is cheating"
    } else if (this.checkResults["cheatRating"] > 25 && this.checkResults["cheatRating"] <= 50){
      this.cheatSummary = "There is a low chance of this player is using cheats"
    } else if (this.checkResults["cheatRating"] > 50 && this.checkResults["cheatRating"] <= 75){
      this.cheatSummary = "It is possible that this player is using cheats"
    } else if (this.checkResults["cheatRating"] > 75){
      this.cheatSummary = "It looks like this player is using cheats"
    } else {
      this.cheatSummary = "It isn't possible to determine whether this player is cheating or not"
    }
  }

}
