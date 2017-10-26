import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoribarangrinciComponent } from './kategoribarangrinci.component';

describe('KategoribarangrinciComponent', () => {
  let component: KategoribarangrinciComponent;
  let fixture: ComponentFixture<KategoribarangrinciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoribarangrinciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoribarangrinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
