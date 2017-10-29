import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembeliandetailaddComponent } from './pembeliandetailadd.component';

describe('PembeliandetailaddComponent', () => {
  let component: PembeliandetailaddComponent;
  let fixture: ComponentFixture<PembeliandetailaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembeliandetailaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembeliandetailaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
