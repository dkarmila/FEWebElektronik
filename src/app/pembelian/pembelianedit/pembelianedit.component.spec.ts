import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembelianeditComponent } from './pembelianedit.component';

describe('PembelianeditComponent', () => {
  let component: PembelianeditComponent;
  let fixture: ComponentFixture<PembelianeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembelianeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembelianeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
