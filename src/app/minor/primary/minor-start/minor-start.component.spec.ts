import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorStartComponent } from './minor-start.component';

describe('MinorStartComponent', () => {
  let component: MinorStartComponent;
  let fixture: ComponentFixture<MinorStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
