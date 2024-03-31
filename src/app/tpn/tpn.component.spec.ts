import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpnComponent } from './tpn.component';

describe('TpnComponent', () => {
  let component: TpnComponent;
  let fixture: ComponentFixture<TpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TpnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
