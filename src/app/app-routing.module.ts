/*
======================================
; Title: app-routing.module.ts
; Author: Chris Gorham
; Date: 13 June 2023
; Description: This code supports functionality for the enterprise composer app
; Sources Used:
; Assignment 4.4 Instructions
;=====================================
*/

// imports modules and components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// routes for the components
const routes: Routes = [
  { path: '', redirectTo: '/composer-list', pathMatch: 'full'},
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
