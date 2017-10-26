import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembelianrinciComponent } from './pembelianrinci.component';

describe('PembelianrinciComponent', () => {
  let component: PembelianrinciComponent;
  let fixture: ComponentFixture<PembelianrinciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembelianrinciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembelianrinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
