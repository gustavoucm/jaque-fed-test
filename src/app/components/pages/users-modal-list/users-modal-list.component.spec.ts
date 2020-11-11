import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersModalListComponent } from './users-modal-list.component';

describe('UsersModalListComponent', () => {
  let component: UsersModalListComponent;
  let fixture: ComponentFixture<UsersModalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersModalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersModalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
