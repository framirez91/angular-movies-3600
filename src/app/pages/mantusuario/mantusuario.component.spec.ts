import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantusuarioComponent } from './mantusuario.component';

describe('MantusuarioComponent', () => {
  let component: MantusuarioComponent;
  let fixture: ComponentFixture<MantusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
