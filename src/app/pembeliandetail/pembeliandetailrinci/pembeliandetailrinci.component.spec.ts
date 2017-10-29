import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembeliandetailrinciComponent } from './pembeliandetailrinci.component';

describe('PembeliandetailrinciComponent', () => {
  let component: PembeliandetailrinciComponent;
  let fixture: ComponentFixture<PembeliandetailrinciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembeliandetailrinciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembeliandetailrinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
