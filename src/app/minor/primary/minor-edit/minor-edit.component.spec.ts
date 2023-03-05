import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorEditComponent } from './minor-edit.component';

describe('MinorEditComponent', () => {
  let component: MinorEditComponent;
  let fixture: ComponentFixture<MinorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
