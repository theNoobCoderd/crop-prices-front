/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import posthog from "posthog-js";

posthog.init(
	'phc_iVhxqcsJlUSE3HT568Yt3cCYvmTuxQtpTmSMANJF75X',
	{
		api_host:'https://us.i.posthog.com',
		person_profiles: 'identified_only'
	}
)

bootstrapApplication(AppComponent, appConfig)
	.catch((err) => console.error(err));
