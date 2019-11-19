import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegxComponent } from './regx.component';

describe('RegxComponent', () => {
  let component: RegxComponent;
  let fixture: ComponentFixture<RegxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
