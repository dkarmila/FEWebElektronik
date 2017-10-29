import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelanggandetail',
  templateUrl: './pelanggandetail.component.html',
  styleUrls: ['./pelanggandetail.component.css']
})
export class PelanggandetailComponent implements OnInit {
 
  dataDetail: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
      debugger;
    })
  }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/pelanggan/"+this.id)
    .subscribe((res:Response) => {
      debugger;
      this.dataDetail=res.json();
    })
  }
}
