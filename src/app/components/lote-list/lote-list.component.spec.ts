/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoteListComponent } from './lote-list.component';

describe('LoteListComponent', () => {
  let component: LoteListComponent;
  let fixture: ComponentFixture<LoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
