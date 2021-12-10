import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalProvidersComponent } from './singal-providers.component';

describe('SingalProvidersComponent', () => {
  let component: SingalProvidersComponent;
  let fixture: ComponentFixture<SingalProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingalProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingalProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
