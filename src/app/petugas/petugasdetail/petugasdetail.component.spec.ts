import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasdetailComponent } from './petugasdetail.component';

describe('PetugasdetailComponent', () => {
  let component: PetugasdetailComponent;
  let fixture: ComponentFixture<PetugasdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetugasdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
