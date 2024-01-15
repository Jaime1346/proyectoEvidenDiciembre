import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnadirComponent } from './annadir.component';

describe('AnnadirComponent', () => {
  let component: AnnadirComponent;
  let fixture: ComponentFixture<AnnadirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnadirComponent]
    });
    fixture = TestBed.createComponent(AnnadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
