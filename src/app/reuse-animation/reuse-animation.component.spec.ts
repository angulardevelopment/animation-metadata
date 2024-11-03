import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseAnimationComponent } from './reuse-animation.component';

describe('ReuseAnimationComponent', () => {
  let component: ReuseAnimationComponent;
  let fixture: ComponentFixture<ReuseAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
