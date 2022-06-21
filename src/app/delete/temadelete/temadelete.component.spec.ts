import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemadeleteComponent } from './temadelete.component';

describe('TemadeleteComponent', () => {
  let component: TemadeleteComponent;
  let fixture: ComponentFixture<TemadeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemadeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemadeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
