import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingUtilityComponent } from './voting-utility.component';

describe('VotingUtilityComponent', () => {
  let component: VotingUtilityComponent;
  let fixture: ComponentFixture<VotingUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
