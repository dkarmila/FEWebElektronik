import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembelianaddComponent } from './pembelianadd.component';

describe('PembelianaddComponent', () => {
  let component: PembelianaddComponent;
  let fixture: ComponentFixture<PembelianaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembelianaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembelianaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
