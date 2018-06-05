import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrggridComponent } from './irggrid.component';

describe('IrggridComponent', () => {
  let component: IrggridComponent;
  let fixture: ComponentFixture<IrggridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrggridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
