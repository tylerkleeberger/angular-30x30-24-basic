import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorItemComponent } from './minor-item.component';

describe('MinorItemComponent', () => {
  let component: MinorItemComponent;
  let fixture: ComponentFixture<MinorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
