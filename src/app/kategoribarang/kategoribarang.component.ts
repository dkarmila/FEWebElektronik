import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-kategoribarang',
  templateUrl: './kategoribarang.component.html',
  styleUrls: ['./kategoribarang.component.css']
})
export class KategoribarangComponent implements OnInit {

  dataTampil: Object;
  // public tableWidget: any;
  constructor(private http:Http) { }

  ngOnInit() {
    //this.http.get("https://elektronik124.herokuapp.com/api/kategoribarang")
    this.http.get("http://localhost:8889/api/kategoribarang")
    .subscribe((res: Response) => {
      this.dataTampil = res.json();
      $(document).ready(function(){
        $("#example").DataTable();
      });
      // $(document).ready(function(){
      //   $('#example').DataTable();
      // })
      //this.initDatatable()
    })
  }

  // ngAfterViewInit() {    
  //   this.initDatatable()
  // }
  
  // private initDatatable(): void {    let exampleId: any = $('#example');
  //     this.tableWidget = exampleId.DataTable({
  //       select: true
  //     });
  //   }
  

}
