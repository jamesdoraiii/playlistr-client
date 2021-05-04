import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllItemsComponent } from './see-all-items.component';

describe('SeeAllItemsComponent', () => {
  let component: SeeAllItemsComponent;
  let fixture: ComponentFixture<SeeAllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAllItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
