import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemUtilityComponent } from './delete-item-utility.component';

describe('DeleteItemUtilityComponent', () => {
  let component: DeleteItemUtilityComponent;
  let fixture: ComponentFixture<DeleteItemUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
