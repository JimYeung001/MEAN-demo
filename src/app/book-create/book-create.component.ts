import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/book', this.book).subscribe(res => {
      const id = res['_id'];
      this.router.navigate(['/book-detail', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
