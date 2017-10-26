import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoribarangComponent } from './kategoribarang.component';

describe('KategoribarangComponent', () => {
  let component: KategoribarangComponent;
  let fixture: ComponentFixture<KategoribarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoribarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoribarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
