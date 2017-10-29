import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugastambahComponent } from './petugastambah.component';

describe('PetugastambahComponent', () => {
  let component: PetugastambahComponent;
  let fixture: ComponentFixture<PetugastambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetugastambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugastambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
