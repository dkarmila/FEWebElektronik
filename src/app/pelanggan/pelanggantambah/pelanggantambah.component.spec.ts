import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelanggantambahComponent } from './pelanggantambah.component';

describe('PelanggantambahComponent', () => {
  let component: PelanggantambahComponent;
  let fixture: ComponentFixture<PelanggantambahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelanggantambahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelanggantambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
