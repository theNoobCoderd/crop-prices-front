export const environment = {
	production: false,
	apiUrl: "http://localhost:8080",  // Development API URL
	fireApiKey: process.env["FIREBASE_API_KEY"],
	fireAuthDomain: process.env["FIREBASE_AUTH_DOMAIN"],
	fireProjectId: "fir-crops-main",
	fireStorageBucket: "fir-crops-main.firebasestorage.app",
	fireMessageSenderId: process.env["FIREBASE_MESSAGE_SENDER_ID"],
	fireAppId: process.env["FIREBASE_APP_ID"]
};
