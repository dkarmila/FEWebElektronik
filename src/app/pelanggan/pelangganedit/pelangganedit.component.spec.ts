import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganeditComponent } from './pelangganedit.component';

describe('PelangganeditComponent', () => {
  let component: PelangganeditComponent;
  let fixture: ComponentFixture<PelangganeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelangganeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
