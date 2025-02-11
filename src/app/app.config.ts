import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {provideCharts, withDefaultRegisterables} from "ng2-charts";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "../environments/environment";

const firebaseConfig = {
	apiKey: environment.fireApiKey,
	authDomain: environment.fireAuthDomain,
	projectId: environment.fireProjectId,
	storageBucket: environment.fireStorageBucket,
	messagingSenderId: environment.fireMessageSenderId,
	appId: environment.fireAppId,
};

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes),
		provideHttpClient(),
		provideCharts(withDefaultRegisterables()),
		provideFirebaseApp(() => initializeApp(firebaseConfig)),
		provideAuth(() => getAuth()),
		provideStorage(() => getStorage()),
		{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }],
};
