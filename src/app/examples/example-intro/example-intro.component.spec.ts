import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleIntroComponent } from './example-intro.component';

describe('ExampleIntroComponent', () => {
  let component: ExampleIntroComponent;
  let fixture: ComponentFixture<ExampleIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
