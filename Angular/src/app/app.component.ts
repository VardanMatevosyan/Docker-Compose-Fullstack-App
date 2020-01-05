import {Component, OnInit} from '@angular/core';
import {HttpRequest} from '@angular/common/http';
import {HttpRequestService} from './http-request.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  baseUrl = 'http://localhost:8080/person';
  getAllUrl = '/all';
  public data: any;

  constructor(private api: HttpRequestService) {}

  ngOnInit() {
    this.api.getPersons(this.baseUrl + this.getAllUrl)
      .subscribe(
        data => {
          console.log(data);
          this.data = data;
        },
        err => {
        console.log(err);
        });
  }

}
