export const environment = {
	production: true,
	apiUrl: "https://api.kozpri.com:8443", // Production API URL
	fireApiKey: process.env["FIREBASE_API_KEY"],
	fireAuthDomain: process.env["FIREBASE_AUTH_DOMAIN"],
	fireProjectId: process.env["FIREBASE_PROJECT_ID"],
	fireStorageBucket: process.env["FIREBASE_STORAGE_BUCKET"],
	fireMessageSenderId: process.env["FIREBASE_MESSAGE_SENDER_ID"],
	fireAppId: process.env["FIREBASE_APP_ID"]
};
