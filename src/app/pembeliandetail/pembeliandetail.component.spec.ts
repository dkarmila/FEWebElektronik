import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembeliandetailComponent } from './pembeliandetail.component';

describe('PembeliandetailComponent', () => {
  let component: PembeliandetailComponent;
  let fixture: ComponentFixture<PembeliandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembeliandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembeliandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
