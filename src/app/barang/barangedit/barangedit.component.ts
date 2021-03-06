import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Routes, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-barangedit',
  templateUrl: './barangedit.component.html',
  styleUrls: ['./barangedit.component.css']
})
export class BarangeditComponent implements OnInit {

  dataEdit: Object;
  dataKategori: Object;
  id: string;
  dataMerk: Object;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/barang/"+this.id)
    // this.http.get("http://localhost:8889/api/barang/"+this.id)
    .subscribe((res:Response) => {
      this.dataEdit = res.json();
      debugger;
    })
    this.http.get("http://localhost:8889/api/kategoribarang")
    .subscribe((res:Response) => {
      this.dataKategori = res.json();
    })
  }

  putBarang(id){
    // this.http.put("https://elektronik124.herokuapp.com/api/barang/"+this.id, this.dataEdit)
    this.http.put("http://localhost:8889/api/barang/"+this.id, this.dataEdit)
    .subscribe((res:Response) => {
      window.location.href='./barang';
    })
  }
  onSelect(kategoriid) {
    debugger;
    this.http.get("http://localhost:8889/api/kategoribarang/"+kategoriid)
    .subscribe((res:Response) => {
      this.dataMerk = res.json().MerkBarang;
      console.log(this.dataMerk);
      debugger;
    })  
    //this.dataMerk = this._countryService.getStates().filter((item) => item.KdKategoriBarang == kategoriid);  
  } 
  

}
