import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorDetailComponent } from './minor-detail.component';

describe('MinorDetailComponent', () => {
  let component: MinorDetailComponent;
  let fixture: ComponentFixture<MinorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
