import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContnetComponent } from './child-contnet.component';

describe('ChildContnetComponent', () => {
  let component: ChildContnetComponent;
  let fixture: ComponentFixture<ChildContnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildContnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildContnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
