import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCleintComponent } from './http-cleint.component';

describe('HttpCleintComponent', () => {
  let component: HttpCleintComponent;
  let fixture: ComponentFixture<HttpCleintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCleintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCleintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
