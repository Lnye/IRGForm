import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrgcardComponent } from './irgcard.component';

describe('IrgcardComponent', () => {
  let component: IrgcardComponent;
  let fixture: ComponentFixture<IrgcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrgcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrgcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
