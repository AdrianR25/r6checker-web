import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(data: any){
    if (data.valid){
      this.router.navigate(['/search', data.form.value['platform'], data.form.value['username']])
    }
  }

}
