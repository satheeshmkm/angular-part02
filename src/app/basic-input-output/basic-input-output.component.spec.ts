import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInputOutputComponent } from './basic-input-output.component';

describe('BasicInputOutputComponent', () => {
  let component: BasicInputOutputComponent;
  let fixture: ComponentFixture<BasicInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
