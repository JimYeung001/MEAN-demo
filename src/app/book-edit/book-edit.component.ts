import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }

 ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/book/' + id).subscribe(data => {
      this.book = data;
    });
  }



  updateBook(id) {
    this.http.put('/book/' + id, this.book).subscribe(res => {
      this.router.navigate(['/book-detail', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
