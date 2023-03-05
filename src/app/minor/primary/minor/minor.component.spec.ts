import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorComponent } from './minor.component';

describe('MinorComponent', () => {
  let component: MinorComponent;
  let fixture: ComponentFixture<MinorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
