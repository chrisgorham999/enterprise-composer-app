/*
======================================
; Title: composer-details.component.spec.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the composer-details component of the enterprise composer app
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComposerDetailsComponent } from './composer-details.component';

describe('ComposerDetailsComponent', () => {
  let component: ComposerDetailsComponent;
  let fixture: ComponentFixture<ComposerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
