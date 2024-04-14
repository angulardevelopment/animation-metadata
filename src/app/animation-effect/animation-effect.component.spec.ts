import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationEffectComponent } from './animation-effect.component';

describe('AnimationEffectComponent', () => {
  let component: AnimationEffectComponent;
  let fixture: ComponentFixture<AnimationEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
