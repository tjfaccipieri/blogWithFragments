import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemeditComponent } from './postagemedit.component';

describe('PostagemeditComponent', () => {
  let component: PostagemeditComponent;
  let fixture: ComponentFixture<PostagemeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
