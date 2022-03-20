import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomdataComponent } from './randomdata.component';

describe('RandomdataComponent', () => {
  let component: RandomdataComponent;
  let fixture: ComponentFixture<RandomdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
