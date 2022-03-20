import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindapiComponent } from './findapi.component';

describe('FindapiComponent', () => {
  let component: FindapiComponent;
  let fixture: ComponentFixture<FindapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
