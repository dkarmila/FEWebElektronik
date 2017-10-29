import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategoribarangedit',
  templateUrl: './kategoribarangedit.component.html',
  styleUrls: ['./kategoribarangedit.component.css']
})
export class KategoribarangeditComponent implements OnInit {

  dataEdit: Object;
  dataEditMerk: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dataEditMerk=[];
    })
  }

  ngOnInit() {
    this.http.get("http://localhost:8889/api/kategoribarang/"+this.id)
    .subscribe((res:Response) => {
      this.dataEdit=res.json();
      this.dataEditMerk=res.json().MerkBarang;
      console.log(this.dataEditMerk);
      debugger;
    })
  }

  putKatBarang(id){
    this.http.put("http://localhost:8889/api/kategoribarang/"+this.id, this.dataEdit)
    .subscribe((res:Response) => {
      debugger;
      window.location.href="./kategoribarang";
    })
  }

}
