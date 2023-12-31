/*
======================================
; Title: composer.service.spec.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the enterprise composer app for assignment 4.4
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

// imports
import { TestBed } from '@angular/core/testing';
import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
