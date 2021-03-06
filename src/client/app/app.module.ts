import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { removeNgStyles, createNewHosts, bootloader, createInputTransfer } from '@angularclass/hmr';

import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule, HttpModule, AppRoutingModule],
	declarations: [AppComponent
	],
	providers: [
		{
			provide: APP_BASE_HREF,
			useValue: '/'
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(public appRef: ApplicationRef) { }

	hmrOnInit(store: any) {
		if (!store || !store.state) return;
		console.log('HMR store', store);
		console.log('store.state.data:', store.state.data)
		// inject AppStore here and update it
		// this.AppStore.update(store.state)
		if ('restoreInputValues' in store) {
			store.restoreInputValues();
		}
		// change detection
		this.appRef.tick();
		delete store.state;
		delete store.restoreInputValues;
	}
	hmrOnDestroy(store: any) {
		var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation)
		// inject your AppStore and grab state then set it on store
		// var appState = this.AppStore.get()
		store.state = { data: 'yolo' };
		// store.state = Object.assign({}, appState)
		// save input values
		store.restoreInputValues = createInputTransfer();
		// remove styles
		removeNgStyles();
	}
	hmrAfterDestroy(store: any) {
		// display new elements
		store.disposeOldHosts()
		delete store.disposeOldHosts;
		// anything you need done the component is removed
	}
}

