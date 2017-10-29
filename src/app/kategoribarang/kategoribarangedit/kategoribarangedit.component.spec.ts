import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoribarangeditComponent } from './kategoribarangedit.component';

describe('KategoribarangeditComponent', () => {
  let component: KategoribarangeditComponent;
  let fixture: ComponentFixture<KategoribarangeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoribarangeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoribarangeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
