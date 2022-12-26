import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkalValidatorbrComponent } from './skal-validatorbr.component';

describe('SkalValidatorbrComponent', () => {
  let component: SkalValidatorbrComponent;
  let fixture: ComponentFixture<SkalValidatorbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkalValidatorbrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkalValidatorbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
