import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string;
  error: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sendQueryValue(query?: string): void {
    if (query.length >= 3) {
      this.searchItems(query);
    } else {
      this.error = 'Введите мин 3 символа';
    }
  }

  clearQueryValue(): void {
    this.value = '';
    this.error = '';
    this.router.navigate(['/movies']);
  }

  searchItems(query: string) {
    this.router.navigate(['/search', 'global'], { queryParams: { 'query': query } });
  }
}
