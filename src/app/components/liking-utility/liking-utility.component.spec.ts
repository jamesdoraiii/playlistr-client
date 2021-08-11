import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikingUtilityComponent } from './liking-utility.component';

describe('LikingUtilityComponent', () => {
  let component: LikingUtilityComponent;
  let fixture: ComponentFixture<LikingUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikingUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikingUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
