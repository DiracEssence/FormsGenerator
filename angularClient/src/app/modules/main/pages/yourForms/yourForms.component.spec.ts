import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFormsComponent } from './yourForms.component';

describe('YourFormsComponent', () => {
  let component: YourFormsComponent;
  let fixture: ComponentFixture<YourFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
