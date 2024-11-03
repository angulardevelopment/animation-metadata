import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildAnimationComponent } from './parent-child-animation.component';

describe('ParentChildAnimationComponent', () => {
  let component: ParentChildAnimationComponent;
  let fixture: ComponentFixture<ParentChildAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
