import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-kategoribarang',
  templateUrl: './kategoribarang.component.html',
  styleUrls: ['./kategoribarang.component.css']
})
export class KategoribarangComponent implements OnInit {

  dataTampil: Object;
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/kategoribarang")
    .subscribe((res: Response) => {
      this.dataTampil = res.json();
    })
  }

}
