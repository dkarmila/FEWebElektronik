import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
// import { Routes, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {

  dataTampil : Object;
  id: string;
  dataEdit: Object;
  dataKategori: Object;
  dataMerk: Object;
  kode: string;
  constructor(private http: Http) {
    // this.route.params.subscribe(params =>{
    //   this.id=params['id'];
    // })
  }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/barang")
        .subscribe((res:Response) => {
      this.dataTampil = res.json();
      $(document).ready(function(){
        $("#example").DataTable();
      });
      debugger;
    })
   
  }

  barangmodal(id){
    
    // this.http.delete("https://elektronik124.herokuapp.com/api/barang/"+id)
    debugger;
    this.http.get("http://localhost:8889/api/barang/"+id)
    .subscribe((res:Response) => {
      this.dataEdit = res.json();
      this.kode = res.json().KdKategoriBarang;
      console.log(this.kode);
      debugger;
      // $('#myModal').on('show.bs.modal', function (event) {
      //   var button = $(event.relatedTarget) // Button that triggered the modal
      //   var recipient = button.data('whatever') // Extract info from data-* attributes
      //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
       
      // })
      // $('#myModal').modal({
      //   show: true,
      //   backdrop: false,
      //   keyboard: false
      // })
    })
    this.http.get("http://localhost:8889/api/kategoribarang")
    .subscribe((res:Response) => {
      this.dataKategori = res.json();
      debugger;
    })
  }

  putBarang(id){
    // this.http.put("https://elektronik124.herokuapp.com/api/barang/"+this.id, this.dataEdit)
    this.http.put("http://localhost:8889/api/barang/"+id, this.dataEdit)
    .subscribe((res:Response) => {
      debugger;
      //$('#myModal').hide();
      
      alert("Data Updated!");
      window.location.href='./barang';
    })
  }

  // onSelect(kategoriid) {
  //   debugger;
  //   this.http.get("http://localhost:8889/api/kategoribarang/"+kategoriid)
  //   .subscribe((res:Response) => {
  //     this.dataMerk = res.json().MerkBarang;
  //     console.log(this.dataMerk);
  //     debugger;
  //   })  
  //   //this.dataMerk = this._countryService.getStates().filter((item) => item.KdKategoriBarang == kategoriid);  
  // }

  barangDelete(id){
<<<<<<< HEAD
    // this.http.delete("https://elektronik124.herokuapp.com/api/barang/"+id)
    debugger;
    this.http.delete("http://localhost:8889/api/barang/"+id)
=======
    this.http.delete("https://elektronik124.herokuapp.com/api/barang/"+id)
>>>>>>> 9e3c48050ea2213b23e447493c28cad2a24deab8
    .subscribe((res:Response) => {
      window.location.href='./barang';
    })
  }

}
