import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VazaoPage } from './vazao.page';

describe('VazaoPage', () => {
  let component: VazaoPage;
  let fixture: ComponentFixture<VazaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VazaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
