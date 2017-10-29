import { Component, OnInit } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Routes, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelangganedit',
  templateUrl: './pelangganedit.component.html',
  styleUrls: ['./pelangganedit.component.css']
})
export class PelangganeditComponent implements OnInit {

  dataEdit: Object;
  id: string;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })
  }

  ngOnInit() {
    this.http.get("https://elektronik124.herokuapp.com/api/pelanggan/"+this.id)
    // this.http.get("http://localhost:8889/api/barang/"+this.id)
    .subscribe((res:Response) => {
      this.dataEdit = res.json();
    })
  }

  putPelanggan(id){
    debugger;
    if(this.dataEdit['KdPelanggan']=="" || this.dataEdit['NamaPelanggan']=="" || 
      this.dataEdit['AlamatPelanggan']=="" || this.dataEdit['UsernamePelanggan']=="" || 
      this.dataEdit['PasswordPelanggan']==""){
      alert("Inputan Jangan Kosong Pakk");
    } else if(this.dataEdit['NoRmh']==null && this.dataEdit['NoTelp']==null){
      debugger;
      alert("No telp / No rumah salah satu harus terisi Pakk");
<<<<<<< HEAD
    }else if(this.dataEdit['NoTelp'] > 9999999999999){
      alert("No Telp Tidak Boleh Lebih Dari 13 Pakk");
    }else if(this.dataEdit['NoRmh'] > 99999999999){
=======
    }else if(this.dataEdit['NoTelp'] > '9999999999999'){
      alert("No Telp Tidak Boleh Lebih Dari 13 Pakk");
    }else if(this.dataEdit['NoRmh'] > '99999999999'){
>>>>>>> 21965c8af443192ae54bf6d1776a4808c9201bc8
      alert("No Rumah Melebihi Batas");
    } else {
      this.http.put("https://elektronik124.herokuapp.com/api/Pelanggan/"+this.id, this.dataEdit)
      .subscribe((res:Response) => {
<<<<<<< HEAD
        window.location.href='./Pelanggan';
=======
        window.location.href='./pelanggan';
>>>>>>> 21965c8af443192ae54bf6d1776a4808c9201bc8
        alert("Berhasil di Edit");
      })
    }
  }
}