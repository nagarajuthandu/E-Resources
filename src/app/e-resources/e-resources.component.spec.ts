import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EResourcesComponent } from './e-resources.component';

describe('EResourcesComponent', () => {
  let component: EResourcesComponent;
  let fixture: ComponentFixture<EResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
