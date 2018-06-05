import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrgexpComponent } from './irgexp.component';

describe('IrgexpComponent', () => {
  let component: IrgexpComponent;
  let fixture: ComponentFixture<IrgexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrgexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrgexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
