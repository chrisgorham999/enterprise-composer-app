/*
======================================
; Title: composer-list.component.spec.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the composer-list component of the enterprise composer app
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

//imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComposerListComponent } from './composer-list.component';

describe('ComposerListComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
