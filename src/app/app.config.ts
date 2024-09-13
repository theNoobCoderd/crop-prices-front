import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
	apiKey: "AIzaSyARgGd6p_9GsJwcn1tCU24eNztYUpdEQVc",
	authDomain: "fir-crops-main.firebaseapp.com",
	projectId: "fir-crops-main",
	storageBucket: "fir-crops-main.appspot.com",
	messagingSenderId: "701697537930",
	appId: "1:701697537930:web:d9d0733c0fbe51a4a3ba73",
	measurementId: "G-K28Q77JLBH"
};

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes),
		provideHttpClient(),
		provideFirebaseApp(() => initializeApp(firebaseConfig)),
		provideAuth(() => getAuth())],
};
