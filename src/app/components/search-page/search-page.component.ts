import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Search, Result } from 'src/app/interfaces/search';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  totalResults: number = 0;
  searchResults: Search["searchResults"];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.makeSearch(params.platform, params.username);
    });
  }

  makeSearch(platform: string, username: string){
    const search = this.dataService.getSearch(platform, username);
    this.searchResults = search.searchResults;
    this.totalResults = search.totalResults;
  }

}
