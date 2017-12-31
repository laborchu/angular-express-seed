import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule,BrowserAnimationsModule, HttpModule,AppRoutingModule],
	declarations: [AppComponent
	],
	providers:[
		{
			provide: APP_BASE_HREF,
			useValue: '/'
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

