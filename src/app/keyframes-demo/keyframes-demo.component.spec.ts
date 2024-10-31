import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframesDemoComponent } from './keyframes-demo.component';

describe('KeyframesDemoComponent', () => {
  let component: KeyframesDemoComponent;
  let fixture: ComponentFixture<KeyframesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyframesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyframesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
