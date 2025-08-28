import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {provideCharts, withDefaultRegisterables} from "ng2-charts";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {AuthInterceptor} from "./services/authentication/auth-interceptor";
import {provideAnimations} from "@angular/platform-browser/animations";

const firebaseConfig = {
	apiKey: "AIzaSyCelSmWQonlcvl8VKYn5aQ9W_5D2lNqplk",
	authDomain: "fir-crops-main.firebaseapp.com",
	projectId: "fir-crops-main",
	storageBucket: "fir-crops-main.firebasestorage.app",
	messagingSenderId: "701697537930",
	appId: "1:701697537930:web:80296f1010423a43a3ba73"
};

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes),
		provideHttpClient(withInterceptorsFromDi()),
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
		provideCharts(withDefaultRegisterables()),
		provideAnimations(),
		provideFirebaseApp(() => initializeApp(firebaseConfig)),
		provideAuth(() => getAuth()),
		provideStorage(() => getStorage()),
		{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }],
};
