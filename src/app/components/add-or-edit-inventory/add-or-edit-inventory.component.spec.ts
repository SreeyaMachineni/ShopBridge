import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditInventoryComponent } from './add-or-edit-inventory.component';

describe('AddOrEditInventoryComponent', () => {
  let component: AddOrEditInventoryComponent;
  let fixture: ComponentFixture<AddOrEditInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
