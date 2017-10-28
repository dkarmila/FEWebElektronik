import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//add
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppsidebarComponent } from './appsidebar/appsidebar.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { BarangComponent } from './barang/barang.component';
import { KategoribarangComponent } from './kategoribarang/kategoribarang.component';
import { PembelianComponent } from './pembelian/pembelian.component';
import { BarangdetailComponent } from './barang/barangdetail/barangdetail.component';
import { BarangeditComponent } from './barang/barangedit/barangedit.component';
import { BarangaddComponent } from './barang/barangadd/barangadd.component';
import { PembeliandetailComponent } from './pembeliandetail/pembeliandetail.component';
import { PembelianrinciComponent } from './pembelian/pembelianrinci/pembelianrinci.component';
import { PembelianeditComponent } from './pembelian/pembelianedit/pembelianedit.component';
import { PembelianaddComponent } from './pembelian/pembelianadd/pembelianadd.component';
import { PetugasComponent } from './petugas/petugas.component';
import { PetugastambahComponent } from './petugas/petugastambah/petugastambah.component';
import { PetugasdetailComponent } from './petugas/petugasdetail/petugasdetail.component';
import { PetugaseditComponent } from './petugas/petugasedit/petugasedit.component';
import { PelangganComponent } from './pelanggan/pelanggan.component';
import { PelanggantambahComponent } from './pelanggan/pelanggantambah/pelanggantambah.component';
import { PelanggandetailComponent } from './pelanggan/pelanggandetail/pelanggandetail.component';
import { PelangganeditComponent } from './pelanggan/pelangganedit/pelangganedit.component';

let routes: Routes=[
  {path: 'barang', component: BarangComponent},
  {path: 'barang/detail/:id', component: BarangdetailComponent},
  {path: 'barang/edit/:id', component: BarangeditComponent},
  {path: 'barang/add', component:BarangaddComponent},
  {path: 'kategoribarang', component: KategoribarangComponent},
  {path: 'petugas', component:PetugasComponent},
  {path: 'petugas/add', component:PetugastambahComponent},
  {path: 'petugas/detail/:id', component:PetugasdetailComponent},
  {path: 'petugas/edit/:id', component: PetugaseditComponent},
  {path: 'pelanggan', component:PelangganComponent},
  {path: 'pelanggan/add', component:PelanggantambahComponent},
  {path: 'pelanggan/detail/:id', component:PelanggandetailComponent},
  {path: 'pelanggan/edit/:id', component: PelangganeditComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppsidebarComponent,
    AppfooterComponent,
    BarangComponent,
    KategoribarangComponent,
    PembelianComponent,
    BarangdetailComponent,
    BarangeditComponent,
    BarangaddComponent,
    PembeliandetailComponent,
    PembelianrinciComponent,
    PembelianeditComponent,
    PembelianaddComponent,
    PetugasComponent,
    PetugastambahComponent,
    PetugasdetailComponent,
    PetugaseditComponent,
    PelangganComponent,
    PelanggantambahComponent,
    PelanggandetailComponent,
    PelangganeditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
