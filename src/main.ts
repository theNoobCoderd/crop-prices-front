/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
	.catch((err) => console.error(err));

// Defer analytics init until the browser is idle so it never delays first render/TTI.
const initAnalytics = () => {
	import('posthog-js').then(({ default: posthog }) => {
		posthog.init(
			'phc_iVhxqcsJlUSE3HT568Yt3cCYvmTuxQtpTmSMANJF75X',
			{
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only'
			}
		);
	});
};

if ('requestIdleCallback' in window) {
	(window as any).requestIdleCallback(initAnalytics);
} else {
	setTimeout(initAnalytics, 2000);
}
