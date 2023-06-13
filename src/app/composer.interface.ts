/*
======================================
; Title: composer.interface.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the enterprise composer app
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

//export IComposer so it can be used elsewhere
export interface IComposer {
  composerId: number;
  fullName: string;
  genre: string;
}
