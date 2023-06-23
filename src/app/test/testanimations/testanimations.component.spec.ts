import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestanimationsComponent } from './testanimations.component';

describe('TestanimationsComponent', () => {
  let component: TestanimationsComponent;
  let fixture: ComponentFixture<TestanimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestanimationsComponent]
    });
    fixture = TestBed.createComponent(TestanimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
