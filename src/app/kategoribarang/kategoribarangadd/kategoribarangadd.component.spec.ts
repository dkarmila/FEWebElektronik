import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoribarangaddComponent } from './kategoribarangadd.component';

describe('KategoribarangaddComponent', () => {
  let component: KategoribarangaddComponent;
  let fixture: ComponentFixture<KategoribarangaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoribarangaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoribarangaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
