import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrgnavComponent } from './irgnav.component';

describe('IrgnavComponent', () => {
  let component: IrgnavComponent;
  let fixture: ComponentFixture<IrgnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrgnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrgnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
