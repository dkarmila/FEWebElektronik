import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelanggandetailComponent } from './pelanggandetail.component';

describe('PelanggandetailComponent', () => {
  let component: PelanggandetailComponent;
  let fixture: ComponentFixture<PelanggandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelanggandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelanggandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
