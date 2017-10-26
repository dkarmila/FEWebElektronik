import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembeliandetaileditComponent } from './pembeliandetailedit.component';

describe('PembeliandetaileditComponent', () => {
  let component: PembeliandetaileditComponent;
  let fixture: ComponentFixture<PembeliandetaileditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembeliandetaileditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembeliandetaileditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
