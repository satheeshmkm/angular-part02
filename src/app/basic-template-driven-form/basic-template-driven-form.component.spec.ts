import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTemplateDrivenFormComponent } from './basic-template-driven-form.component';

describe('BasicTemplateDrivenFormComponent', () => {
  let component: BasicTemplateDrivenFormComponent;
  let fixture: ComponentFixture<BasicTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTemplateDrivenFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
