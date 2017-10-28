import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugaseditComponent } from './petugasedit.component';

describe('PetugaseditComponent', () => {
  let component: PetugaseditComponent;
  let fixture: ComponentFixture<PetugaseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetugaseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugaseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
