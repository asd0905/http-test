import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
    data: object;
    loading: boolean;

  // constructor(private http: Http) { }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  makeRequest(): void {
      this.loading = true;
      this.http
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .subscribe(data => {
              this.data = data;
              this.loading = false;
          });
  }

}
