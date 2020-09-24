import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterComponent} from './filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     imports: [ReactiveFormsModule, FormsModule],
                                     declarations: [FilterComponent]
                                   })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
