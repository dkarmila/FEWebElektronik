import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barangdetail',
  templateUrl: './barangdetail.component.html',
  styleUrls: ['./barangdetail.component.css']
})
export class BarangdetailComponent implements OnInit {

  dataDetail: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id=params['id'];
      debugger;
    })
  }

  ngOnInit() {
    // this.http.get("https://elektronik124.herokuapp.com/api/barang/"+this.id)
    debugger;
    this.http.get("http://localhost:8889/api/barang/"+this.id)
    .subscribe((res:Response) => {
      debugger;
      this.dataDetail=res.json();
    })
  }

}
