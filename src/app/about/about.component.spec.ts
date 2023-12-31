/*
======================================
; Title: about.component.spec.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the about component of the enterprise composer app
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
